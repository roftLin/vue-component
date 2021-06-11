// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()

// Vue.use(VueRouter)

export const routes = [
  { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
  { path: '/start', name: '上手', component: () => import('./views/Start.vue') },
  { path: '*', redirect: '/' }
]

// const router = new VueRouter({ routes })
const router = createRouter({ history, routes })

export default router
