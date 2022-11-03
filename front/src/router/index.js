import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Alltest from '../views/Alltest.vue'
import idealtypeStart from '../views/test/idealtype/idealtypeStart.vue'
import idealtype1 from '../views/test/idealtype/idealtype1.vue'
import idealtypeEnd from '../views/test/idealtype/idealtypeEnd.vue'
import idealtest from '../views/test/idealtype/idealtest.vue'
import idealtest2 from '../views/test/idealtype/idealtest2.vue'
import Foodtest from '../views/test/food/Foodtest.vue'
import Foodtestgo from '../views/test/food/Foodtestgo.vue'
import PsychoTest from '../views/test/psycho/PsychoTest.vue'
import PsychoTest1 from '../views/test/psycho/PsychoTest1.vue'



import Lolchang from '../views/test/lol/Lolchang.vue'
import Lolchanggo2 from '../views/test/lol/Lolchanggo2'


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
    path: '/idealtest',
    name: 'idealtest',
    component: idealtest
  },
  {
    path: '/idealtest2',
    name: 'idealtest2',
    component: idealtest2
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
