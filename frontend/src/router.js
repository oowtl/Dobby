import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/home'
import Main from '@/views/main/main'
import SelectSignup from '@/views/main/select-signup'
import Signup from '@/views/main/signup'

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
  {
    path: '/selectsignup',
    name: 'SelectSignup',
    component: SelectSignup,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
