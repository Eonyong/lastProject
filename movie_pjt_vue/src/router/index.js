import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import login from '@/views/login'
import CreateAccount from '@/views/CreateAccount'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/CreateAccount',
    name: 'CreateAccount',
    component: CreateAccount
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
