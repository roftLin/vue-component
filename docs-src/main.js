import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {install} from '../src'
import('../package.json').then(config => import(`../dist/${config.name}.css`))
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-CN';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(install)
Vue.use(ElementUI, { locale, size: 'mini' });

export default new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});


