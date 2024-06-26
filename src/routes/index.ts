import { createRouter, createWebHistory } from 'vue-router'
import { AppRoutes } from './modules'

const routes = [{ path: '/', redirect: '/app/home' }, ...AppRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
export default router
