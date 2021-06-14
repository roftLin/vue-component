import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()

export const routes = [
  { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
  { path: '/start', name: '上手', component: () => import('./views/Start.vue') },
]

const router = createRouter({ history, routes })

export default router
