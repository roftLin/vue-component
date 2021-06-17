import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {install} from '../src'
import('../package.json').then(config => import(`../dist/${config.name}.css`))

Vue.use(install)

export default new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});


