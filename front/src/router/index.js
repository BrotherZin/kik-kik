import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Alltest from '../views/Alltest.vue'
import GirlsidealtypeStart from '../views/test/Girlsidealtype/GirlsidealtypeStart.vue'
import GirlsidealtypeEnd from '../views/test/Girlsidealtype/GirlsidealtypeEnd.vue'
import Girlsidealtest from '../views/test/Girlsidealtype/Girlsidealtest.vue'
import MansidealtypeStart from '../views/test/Mansidealtype/MansidealtypeStart.vue'
import MansidealtypeEnd from '../views/test/Mansidealtype/MansidealtypeEnd.vue'
import Mansidealtest from '../views/test/Mansidealtype/Mansidealtest.vue'
import ramenTest from '../views/test/ramenWorldcup/ramenTest.vue'
import ramenStart from '../views/test/ramenWorldcup/ramenStart.vue'
import ramenEnd from '../views/test/ramenWorldcup/ramenEnd.vue'
import Foodtest from '../views/test/food/Foodtest.vue'
import Foodtestgo from '../views/test/food/Foodtestgo.vue'
import PsychoTest from '../views/test/psycho/PsychoTest.vue'
import PsychoTest1 from '../views/test/psycho/PsychoTest1.vue'
import Lolchang from '../views/test/lol/Lolchang.vue'
import Lolchanggo2 from '../views/test/lol/Lolchanggo2'
import Lolskin from '../views/test/lolskin/Lolskin.vue'
import Lolskin2 from '../views/test/lolskin/Lolskin2.vue'


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
    path: '/ramenTest',
    name: 'ramenTest',
    component: ramenTest
  },
  {
    path: '/ramenStart',
    name: 'ramenStart',
    component: ramenStart
  },
  {
    path: '/ramenEnd',
    name: 'ramenEnd',
    component: ramenEnd
  },
  {
    path: '/GirlsidealtypeStart',
    name: 'GirlsidealtypeStart',
    component: GirlsidealtypeStart
  },
  {
    path: '/GirlsidealtypeEnd',
    name: 'Girlsidealtypeend',
    component: GirlsidealtypeEnd
  },
  {
    path: '/Girlsidealtest',
    name: 'Girlsidealtest',
    component: Girlsidealtest
  },
  {
    path: '/MansidealtypeStart',
    name: 'MansidealtypeStart',
    component: MansidealtypeStart
  },
  {
    path: '/MansidealtypeEnd',
    name: 'Mansidealtypeend',
    component: MansidealtypeEnd
  },
  {
    path: '/Mansidealtest',
    name: 'Mansidealtest',
    component: Mansidealtest
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
  {
    path: '/Lolskin',
    name: 'Lolskin',
    component: Lolskin
  },
  {
    path: '/Lolskin2',
    name: 'Lolskin2',
    component: Lolskin2
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
