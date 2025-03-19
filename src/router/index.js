import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/Home.vue'

const lazyLoad = (view) => () => import(`@/view/${view}.vue`)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: lazyLoad('Dashboard'),
  },
  {
    path: '/Config',
    name: 'Config',
    component: lazyLoad('Config'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: lazyLoad('Home'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
