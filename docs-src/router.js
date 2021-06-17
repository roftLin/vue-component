import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Start from './views/Start.vue'

Vue.use(Router);

export const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/start', name: '上手', component: Start },
  { path: '*', redirect: '/' }
]
const router = new Router({
  mode: 'history',
  routes,
});

export default router
