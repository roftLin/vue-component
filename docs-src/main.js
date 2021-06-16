import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import {install} from '../src'
import('../package.json').then(config => import(`../dist/${config.name}.css`))

const app = createApp(App)
app.use(install)
app.use(router)

app.mount('#app')

