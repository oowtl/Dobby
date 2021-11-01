import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/main/main'
import SelectSignup from '@/views/main/select-signup'
import Signup from '@/views/main/signup'
import FindInfo from '@/views/main/findInfo'
import NewGroup from '@/views/group/new-group'
import UpdateGroup from '@/views/group/update-group'
import GroupInfo from '@/views/group/group-info'

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
    path: '/find',
    name: 'FindInfo',
    component: FindInfo,
  },
  {
    path: '/newgroup',
    name: 'NewGroup',
    component: NewGroup,
  },
  {
    path: '/updategroup',
    name: 'UpdateGroup',
    component: UpdateGroup,
  },
  {
    path: '/group',
    name: 'GroupInfo',
    component: GroupInfo,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
