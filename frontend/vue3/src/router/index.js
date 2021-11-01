import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main/main'
import SelectSignup from '@/views/main/select-signup'
import Signup from '@/views/main/signup'
import Calendar from '@/views/calendar/Calendar'
import Schedule from '@/views/schedule/Schedule'

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
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
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
