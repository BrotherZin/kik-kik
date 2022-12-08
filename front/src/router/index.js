import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Alltest from '../views/Alltest.vue'
import Join from '../views/Join.vue'
import Login from '../views/Login.vue'

//민하
import Foodtest from '../views/test/food/Foodtest.vue'
import Foodtestgo from '../views/test/food/Foodtestgo.vue'
import Foodresult from '../views/test/food/Foodresult.vue'
import Movietest from '../views/test/movie/movietest.vue'
import Movietestgo from '../views/test/movie/movietestgo.vue'
import Movieresult from '../views/test/movie/movieresult.vue'

//형진
import GirlsidealtypeStart from '../views/test/Girlsidealtype/GirlsidealtypeStart.vue'
import GirlsidealtypeEnd from '../views/test/Girlsidealtype/GirlsidealtypeEnd.vue'
import Girlsidealtest from '../views/test/Girlsidealtype/Girlsidealtest.vue'
import MansidealtypeStart from '../views/test/Mansidealtype/MansidealtypeStart.vue'
import MansidealtypeEnd from '../views/test/Mansidealtype/MansidealtypeEnd.vue'
import Mansidealtest from '../views/test/Mansidealtype/Mansidealtest.vue'
import ramenTest from '../views/test/ramenWorldcup/ramenTest.vue'
import ramenStart from '../views/test/ramenWorldcup/ramenStart.vue'
import ramenEnd from '../views/test/ramenWorldcup/ramenEnd.vue'
import cheerTest from '../views/test/cheerleader/cheerTest.vue'
import cheerStart from '../views/test/cheerleader/cheerStart.vue'
import cheerEnd from '../views/test/cheerleader/cheerEnd.vue'
import manActorTest from '../views/test/manActor/manActorTest.vue'
import manActorStart from '../views/test/manActor/manActorStart.vue'
import manActorEnd from '../views/test/manActor/manActorEnd.vue'
import girlActorTest from '../views/test/girlActor/girlActorTest.vue'
import girlActorStart from '../views/test/girlActor/girlActorStart.vue'
import girlActorEnd from '../views/test/girlActor/girlActorEnd.vue'
import gameEnd from '../views/test/gameWorldcup/gameEnd.vue'
import gameStart from '../views/test/gameWorldcup/gameStart.vue'
import gameTest from '../views/test/gameWorldcup/gameTest.vue'
import ghostEnd from '../views/test/ghost/ghostEnd.vue'
import ghostStart from '../views/test/ghost/ghostStart.vue'
import ghostTest from '../views/test/ghost/ghostTest.vue'
import catEnd from '../views/test/cat/catEnd.vue'
import catStart from '../views/test/cat/catStart.vue'
import catTest from '../views/test/cat/catTest.vue'

//지원
import PsychoTest from '../views/test/psycho/PsychoTest.vue'
import PsychoTest1 from '../views/test/psycho/PsychoTest1.vue'
import PsychoTestF from '../views/test/psycho/PsychoTestF.vue'
import Dtest from '../views/test/depression/Dtest.vue'
import Dtest1 from '../views/test/depression/Dtest1.vue'
import DtestF from '../views/test/depression/DtestF.vue'
import ss from '../views/test/sangsig/ss.vue'
import ss1 from '../views/test/sangsig/ss1.vue'
import ssF from '../views/test/sangsig/ssF.vue'
import sp1 from '../views/test/phone/sp1.vue'
import sp2 from '../views/test/phone/sp2.vue'
import spF from '../views/test/phone/spF.vue'

//진아
import Lolchang from '../views/test/lol/Lolchang.vue'
import Lolchanggo2 from '../views/test/lol/Lolchanggo2'
import Lolchanggo3 from '../views/test/lol/Lolchanggo3.vue'
import Lolskin from '../views/test/lolskin/Lolskin.vue'
import Lolskin2 from '../views/test/lolskin/Lolskin2.vue'
Vue.use(VueRouter)

const routes = [
  //ALL
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
    path: '/Join',
    name: 'Join',
    component: Join
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },

  //민하
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
    path: '/Foodresult',
    name: 'foodresult',
    component: Foodresult
  },
  {
    path: '/Movietest',
    name: 'movietest',
    component: Movietest
  },
  {
    path: '/Movietestgo',
    name: 'movietestgo',
    component: Movietestgo
  },
  {
    path: '/Movieresult',
    name: 'Movieresult',
    component: Movieresult
  },

  //진아
  {
    path: '/Lolchang',
    name: 'Lolchang',
    component: Lolchang
  },
  {
    path: '/Lolchanggo2',
    name: 'Lolchanggo',
    component: Lolchanggo2
  },
  {
    path: '/Lolchanggo3',
    name: 'Lolchanggo3',
    component: Lolchanggo3
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

  //지원
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
    path: '/PsychoTestF',
    name: 'psychotestf',
    component: PsychoTestF
  },
  {
    path: '/Dtest',
    name: 'dtest',
    component: Dtest
  },
  {
    path: '/Dtest1',
    name: 'dtest1',
    component: Dtest1
  },
  {
    path: '/DtestF',
    name: 'dtestf',
    component: DtestF
  },
  {
    path: '/ss',
    name: 'ss',
    component: ss
  },
  {
    path: '/ss1',
    name: 'ss1',
    component: ss1
  },
  {
    path: '/ssF',
    name: 'ssf',
    component: ssF
  },
  {
    path: '/sp1',
    name: 'sp1',
    component: sp1
  },
  {
    path: '/sp2',
    name: 'sp2',
    component: sp2
  },
  {
    path: '/spF',
    name: 'spf',
    component: spF
  },

  //형진
  {
    path: '/catTest',
    name: 'catTest',
    component: catTest
  },
  {
    path: '/catStart',
    name: 'catStart',
    component: catStart
  },
  {
    path: '/catEnd',
    name: 'catEnd',
    component: catEnd
  },
  {
    path: '/ghostTest',
    name: 'ghostTest',
    component: ghostTest
  },
  {
    path: '/ghostStart',
    name: 'ghostStart',
    component: ghostStart
  },
  {
    path: '/ghostEnd',
    name: 'ghostEnd',
    component: ghostEnd
  },
  {
    path: '/manActorTest',
    name: 'manActorTest',
    component: manActorTest
  },
  {
    path: '/manActorStart',
    name: 'manActorStart',
    component: manActorStart
  },
  {
    path: '/manActorEnd',
    name: 'manActorEnd',
    component: manActorEnd
  },
  {

    path: '/girlActorTest',
    name: 'girlActorTest',
    component: girlActorTest
  },
  {
    path: '/girlActorStart',
    name: 'girlActorStart',
    component: girlActorStart
  },
  {
    path: '/girlActorEnd',
    name: 'girlActorEnd',
    component: girlActorEnd
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
    path: '/cheerTest',
    name: 'cheerTest',
    component: cheerTest
  },
  {
    path: '/cheerStart',
    name: 'cheerStart',
    component: cheerStart
  },
  {
    path: '/cheerEnd',
    name: 'cheerEnd',
    component: cheerEnd
  },
  {
    path: '/gameTest',
    name: 'gameTest',
    component: gameTest
  },
  {
    path: '/gameStart',
    name: 'gameStart',
    component: gameStart
  },
  {
    path: '/gameEnd',
    name: 'gameEnd',
    component: gameEnd
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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
