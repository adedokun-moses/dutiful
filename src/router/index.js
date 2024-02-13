import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: () => import(/* webpackChunkName: "about" */ '../views/forgot.vue')
  },
  {
    path: '/reset',
    name: 'reset',
    component: () => import(/* webpackChunkName: "about" */ '../views/reset.vue')
  },
  {
    path: '/otpsucc',
    name: 'otpsucc',
    component: () => import(/* webpackChunkName: "about" */ '../views/otpsucc.vue')
  },
  {
    path: '/confirmotp',
    name: 'confirmotp',
    component: () => import(/* webpackChunkName: "about" */ '../views/confirmotp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
