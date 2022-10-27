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
import idealtest from '../test/idealtype/idealtest.vue'
import idealtest2 from '../test/idealtype/idealtest2.vue'
import PsychoTest1 from '../test/psycho/PsychoTest1.vue'

import PsychoTest2 from '../test/psycho/PsychoTest2.vue'

import Lolchang from '../test/lol/Lolchang.vue'
import Lolchanggo2 from '../test/lol/Lolchanggo2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/idealtest',

    component: idealtest
  },
  {
    path: '/idealtest2',

    component: idealtest2
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
  {

    path: '/PsychoTest2',
    name: 'psychotest2',
    component: PsychoTest2
  },
  {
    path: '/Lolchang',
    name: 'lolchang',
    component: Lolchang
  },
  {
    path: '/Lolchanggo2',
    name: 'lolchanggo',
    component: Lolchanggo2
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
