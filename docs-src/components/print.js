const compose = (...funcs) => {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((tol, cur) => {
    return (...args) => tol(cur(...args));
  })
}

const print = (setting) => {
  const createIframe = (selector) => {
    const iframe = document.createElement('iframe')
    document.body.appendChild(iframe)
    iframe.selector = selector;
    iframe.style.position = 'absolute';
    iframe.style.top = '-9999px';
    iframe.style.left = '-9999px';
    iframe.doc = iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow ? iframe.contentWindow.document : iframe.document);
    iframe.win = iframe.contentWindow || iframe.f.contentWindow;
    return iframe
  }

  const addStyle = (iframe) => {
    const { doc } = iframe
    const styleList = document.getElementsByTagName('style');
    const nodes = Array.prototype.slice.call(styleList, 0);
    nodes.forEach(style => doc.write(`<style type="text/css">${style.innerHTML}</style>`));
    return iframe
  }

  const addLink = (iframe) => {
    const { doc } = iframe
    const linkList = document.getElementsByTagName('link');
    const nodes = Array.prototype.slice.call(linkList, 0);
    nodes.forEach(link => doc.write(link.outerHTML));
    return iframe
  }

  const addBody = (iframe) => {
    const { doc } = iframe
    const node = document.querySelector(iframe.selector)
    doc.write(`<body>${node.outerHTML}</body>`)
    return iframe
  }

  const print = (iframe) => {
    const { win, doc } = iframe
    doc.close()
    win.print();
    return iframe
  }

  const dispose = (iframe) => {
    iframe.remove()
  }

  const run = () => {
    let iframe = createIframe(setting.selector)
    try {
      iframe = compose(print, addBody, addStyle, addLink)(iframe)
    } finally {
      // dispose(iframe)
    }
  }
  run(setting)
}

function install(Vue) {
  Vue.directive('print', {
    bind(el, binding, vnode) {
      const partPrint = () => {
        if (typeof binding.value === 'object') {
          print({
            ...binding.value,
          })
        } else {
          print({
            selector: binding.value,
          })
        }
      }
      el.addEventListener('click', (event) => {
        if (binding.value) {
          partPrint()
        } else {
          window.print()
        }
      })
    }
  })
}

const PrintPlugin = {}
PrintPlugin.install = install

export default PrintPlugin
