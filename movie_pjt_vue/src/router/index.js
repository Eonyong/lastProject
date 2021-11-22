import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '@/views/Home'
import Login from '@/views/accounts/Login'
import Signup from '@/views/accounts/Signup'
import MovieList from '@/views/movie/MovieList'
import MovieDetail from '@/views/movie/MovieDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/movie/MovieList',
    name: 'MovieList',
    component: MovieList
  },
  {
    path: '/movie/MovieDetail',
    name: 'MovieDetail',
    component: MovieDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
