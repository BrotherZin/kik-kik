import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Alltest from '../views/Alltest.vue'
import idealtypeStart from '../test/idealtype/idealtypeStart.vue'
import idealtype1 from '../test/idealtype/idealtype1.vue'
import idealtypeEnd from '../test/idealtype/idealtypeEnd.vue'
import Foodtest from '../test/food/Foodtest.vue'
import Foodtestgo from '../test/food/Foodtestgo.vue'
import PsychoTest from '../test/psycho/PsychoTest.vue'
import test from '../views/test.vue'
import PsychoTest1 from '../test/psycho/PsychoTest1.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',

    component: test
  },

  {
    path: '/Alltest',
    name: 'testStart',
    component: Alltest
  },
  {
    path: '/idealtypeStart',
    name: 'idealtypeStart',
    component: idealtypeStart
  },
  {
    path: '/idealtype1',
    name: 'idealtype1',
    component: idealtype1
  },

  {
    path: '/idealtypeEnd',
    name: 'idealtypeend',
    component: idealtypeEnd
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
  {
    path: '/PsychoTest1',
    name: 'psychotest1',
    component: PsychoTest1
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
