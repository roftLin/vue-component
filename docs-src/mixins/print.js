// 1) printing.vue  => print-range / print-style
// 2) getTemplateData => convert(genConvert) / resolve(next vm.$data)
function createIframe(id = 'printIframe') {
  if (document.getElementById(id)) {
    document.body.removeChild(document.getElementById(id));
  }
  const iframe = document.createElement('iframe');
  iframe.id = id;
  iframe.style.position = 'absolute';
  iframe.style.top = '-9999px';
  iframe.style.left = '-9999px';
  document.body.appendChild(iframe);
  return iframe;
}

const PageBreakStr = '<div style="page-break-after: always;"></div>';

export default {
  data() {
    return {
      // 待打印集合
      formPrintData: [],
    };
  },
  mounted() {
    this.iframeId = 'printIframe';
    this.iframe = createIframe(this.iframeId);
  },
  methods: {
    // @overwrite
    // 获取模板数据的方式
    // getTemplateData
    // @return Promise.resolve

    // @vuese
    // 预览打印
    // TODO: width height srcdoc
    preview() {

    },
    // @vuese
    // 获取打印的字符串
    // @arr [ { data: '传入getTemplateData的数据', copies: '份数默认为1' } ]
    getPrintString(arr) {
      let str = '';
      return new Promise((resolve) => {
        if (!arr) {
          str += this.$el.innerHTML;
          resolve(`<!--startprint-->${str}<!--endprint-->`);
        } else {
          // arr.forEach
          Promise.all(arr.map(item => (this.getTemplateData(item.data))))
            .then(res => {
              res.forEach((html, index) => {
                // 分页
                let { copies } = arr[index];
                copies = copies || 1;
                str += `${new Array(copies).fill(html)
                  .join(`${PageBreakStr}`)}${PageBreakStr}`;
              });
              resolve(`<!--startprint-->${str}<!--endprint-->`);
            });
        }
      });
    },
    getFuncCfg() {
      return new Promise((resolve, rej) => {
        if (this.prodOrderType === 'EC_CL') {
          this.$store.dispatch('base/getFuncCfg', { funcTypeCode: 'edit', orderTypeCode: this.custOrderType })
            .then((res) => {
              if (
                res &&
                res.params &&
                res.params.AFFILIATION_PARAM &&
                res.params.AFFILIATION_PARAM.paramListValues &&
                res.params.AFFILIATION_PARAM.paramListValues.length
              ) {
                Object.assign(this.formData, { affiliationTypeOption: res.params.AFFILIATION_PARAM.paramListValues });
              } else {
                Object.assign(this.formData, { affiliationTypeOption: [] });
              }
              resolve();
            })
            .catch((res) => {
              rej(res);
            });
          return;
        }
        resolve();
      });
    },
    async print(arr, opt) {
      await this.getFuncCfg();
      this.formPrintData = arr;
      this.$nextTick(() => {
        this.printData(arr, opt);
      });
    },
    // @vuese
    // 获取打印的字符串
    async printData(arr, opt) {
      const { afterPrint } = opt || {};
      const printFrame = document.getElementById(this.iframeId).contentWindow;
      this.addStyleToIframe(printFrame);
      this.addLinkToIframe(printFrame);
      const res = await this.getPrintString(arr);
      printFrame.document.write(`<div>${res}</div>`);
      printFrame.addEventListener('afterprint', (ev) => {
        afterPrint && afterPrint();
        createIframe();
      });
      printFrame.document.close();
      printFrame.focus();
      setTimeout(() => {
        printFrame.print();
      }, 300);
    },
    addStyleToIframe(iframe) {
      const styleList = document.getElementsByTagName('style');
      const node = Array.prototype.slice.call(styleList, 0);
      node.forEach(style => iframe.document.write(`<style>${style.innerHTML}</style>`));
    },
    addLinkToIframe(iframe) {
      const linkList = document.getElementsByTagName('link');
      const node = Array.prototype.slice.call(linkList, 0);
      node.forEach(link => iframe.document.write(link.outerHTML));
    },
  },
};
