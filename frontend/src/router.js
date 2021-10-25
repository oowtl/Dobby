import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/home'
import Main from '@/views/main'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
