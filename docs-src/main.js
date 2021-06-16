import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import {install} from '../src'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

import('../package.json').then(config => import(`../dist/${config.name}.css`))

const app = createApp(App)
app.use(install)
app.use(router)
app.use(ElementPlus, { locale, size: 'mini' });

app.mount('#app')

