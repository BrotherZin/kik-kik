import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Alltest from '../views/Alltest.vue'
import Example1 from '../views/Example1.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {

    path: '/Alltest',


    name: 'testStart',
    component: Alltest
  },
  {
    path: '/Example1',
    name: 'Test1',
    component: Example1
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
