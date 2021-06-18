import Component from './lib/index.vue'

const components = [
  Component
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export { install }

export default Component

