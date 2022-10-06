import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Alltest from '../views/Alltest.vue'
import Example1 from '../test/idealtype/Example1.vue'
import ExampleEnd from '../test/idealtype/ExampleEnd.vue'
import Foodtest from '../test/food/Foodtest.vue'
import Foodtestgo from '../test/food/Foodtestgo.vue'
import PsychoTest from '../test/psycho/PsychoTest.vue'
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
    path: '/PsychoTest',
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
