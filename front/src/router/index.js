import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Alltest from '../views/Alltest.vue'
import Example1 from '../views/Example1.vue'
import ExampleEnd from '../views/ExampleEnd.vue'
import Foodtest from '../views/Foodtest.vue'
import Foodtestgo from '../test/Foodtestgo.vue'
import PsychoTest from '../views/PsychoTest.vue'
import test from '../views/test.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',

    component:test
  },

  {
    path: '/Alltest',
    name: 'testStart',
    component: Alltest
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
  },
  {
    path: '/ExampleEnd',
    name: 'Test1end',
    component: ExampleEnd
  },
  {
    path: '/Foodtest',
    name: 'foodtest',
    component: Foodtest
  },
  {
    path: '/Foodtestgo',
    name: 'foodtestgo',
    component: Foodtestgo
  },
  {
    path: '/psychoTest',
    name: 'psychotest',
    component: PsychoTest
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
