<template>
    <v-layout class="background" align-center justify-center>
      <div>
        <v-layout class="inside" fill-height align-center justify-center>
          <div class="text" style="text-align: center">
              <search3></search3>
              <div class="font" style="text-align: left"></div>
              <div class="test1" @click="foodtest">
                <img class="image1" src="/thumbnail/foodtest.png" />
                쩝쩝박사 테스트
              </div>
  
              <div class="test1" @click="psychotest">
                <img class="image1" src="/thumbnail/main.png" />
                사이코패스 테스트
              </div>
  
              <div class="test1" @click="girlsideal">
                <img class="image1" src="/thumbnail/girlsidealTN.png" />
                여자 가수 월드컵
              </div>
  
              <div class="test1" @click="Lolchango">
                <img class="image1" src="/image/lol/kda.png" />
                롤창 테스트
              </div>
  
              <div class="test1" @click="Lolskin">
                <img class="image1" src="/thumbnail/box.png" />
                롤 흑우력 테스트
              </div>
  
              <div class="test1" @click="mansideal">
                <img class="image1" src="/thumbnail/mansidealTN.png" />
                남자이상형 월드컵
              </div>
  
              <div class="test1" @click="ramenTest">
                <img class="image1" src="/thumbnail/ramenTN.png" />
                라면 월드컵
              </div>
  
              <div class="test1" @click="Dtest">
                <img class="image1" src="/thumbnail/main2.png" />
                우울증 테스트
              </div>
  
              <div class="test1" @click="manactor">
                <img class="image1" src="/thumbnail/manActorTN.png" />
                남자 배우 월드컵
              </div>
  
              <div class="test1" @click="cheerleader">
                <img class="image1" src="/thumbnail/cheerTN.png" />
                치어리더 월드컵
              </div>
  
              <div class="test1" @click="girlActor">
                <img class="image1" src="/thumbnail/girlActorTN.png" />
                여자 배우 월드컵
              </div>
  
              <div class="test1" @click="sangsig">
                <img class="image1" src="/image/sangsig/main.png"/>
                상식 테스트
              </div>
  
              <div class="test1" @click="movietest">
                <img class="image1" src="/thumbnail/movie.jpg"/>
                영화 테스트
              </div>
  
              <div class="test1" @click="gameWorldcup">
                <img class="image1" src="/thumbnail/gameTN.jpg" />
                추억게임 월드컵
              </div>
  
              <div class="test1" @click="ghost">
                <img class="image1" src="/thumbnail/ghostTN.png" />
                귀신 월드컵
              </div>
  
              <div class="test1" @click="cat">
                <img class="image1" src="/thumbnail/catTN.png" />
                냥냥 월드컵
              </div>
            </div>
        </v-layout>
      </div>
    </v-layout>
  </template>
    
    <script>
  import axios from "axios";
  import HelloWorld from "../components/HelloWorld";
  import Search3 from "@/components/Search3";
  export default {
    name: "Home",
    components: {
      Search3,
    },
    data() {
      return {
        id: "",
        name: "",
        tests: [
        {
              id: 1,
              name: "쩝쩝박사 테스트",
              image: "/thumbnail/foodtest.png",
              url: "/foodtest",
            },
            {
              id: 2,
              name: "사이코패스 테스트",
              image: "/thumbnail/main.png",
              url: "/psychotest",
            },
            {
              id: 3,
              name: "여자 가수 테스트",
              image: "/thumbnail/girlsidealTN.png",
              url: "/girlsidealtypeStart",
            },
            {
              id: 4,
              name: "롤창 테스트",
              image: "/image/lol/kda.png",
              url: "/lolchang",
            },
            {
              id: 5,
              name: "롤 흑우력 테스트",
              image: "/thumbnail/box.png",
              url: "/Lolskin",
            },
            {
              id: 6,
              name: "남자 가수 월드컵",
              image: "/thumbnail/mansidealTN.png",
              url: "/mansidealtypeStart",
            },
            {
              id: 7,
              name: "라면 월드컵",
              image: "/thumbnail/ramenTN.png",
              url: "/ramenStart",
            },
            {
              id: 8,
              name: "냥냥 월드컵",
              image: "/thumbnail/catTN.png",
              url: "/catStart",
            },
            {
              id: 9,
              name: "우울증 테스트",
              image: "/thumbnail/main2.png",
              url: "/Dtest",
            },
            {
              id: 10,
              name: "남자 배우 월드컵",
              image: "/thumbnail/manactorTN.png",
              url: "/manactorStart",
            },
            {
              id: 11,
              name: "치어리더 월드컵",
              image: "/thumbnail/cheerTN.png",
              url: "/cheerleaderStart",
            },
    
            {
              id: 12,
              name: "여자 배우 월드컵",
              image: "/thumbnail/girlActorTN.png",
              url: "/girlactorStart",
            },
            {
              id: 13,
              name: "추억의게임 월드컵",
              image: "/thumbnail/gameTN.jpg",
              url: "/gameStart",
            },
            {
              id: 14,
              name: "호러 귀신 월드컵",
              image: "/thumbnail/ghostTN.png",
              url: "/ghostStart",
            },
            {
              id: 15,
              name: "영화 테스트",
              image: "/thumbnail/movie.jpg",
              url: "/movietest",
            },
        ],
      };
    },
    methods: {
      foodtest() {
        this.$router.push("/foodtest");
      },
      psychotest() {
        this.$router.push("/psychotest");
      },
      girlsideal() {
        this.$router.push("/girlsidealtypeStart");
      },
      mansideal() {
        this.$router.push("/mansidealtypeStart");
      },
      Lolchango() {
        this.$router.push("/Lolchang");
      },
      Lolskin() {
        this.$router.push("/Lolskin");
      },
      ramenTest() {
        this.$router.push("/ramenStart");
      },
      Dtest() {
        this.$router.push("/Dtest");
      },
      manactor() {
        this.$router.push("/manactorStart");
      },
      girlActor() {
        this.$router.push("/girlActorStart");
      },
      cheerleader() {
        this.$router.push("/cheerStart");
      },
      gameWorldcup() {
        this.$router.push("/gameStart");
      },
      ghost() {
        this.$router.push("/ghostStart");
      },
      cat() {
        this.$router.push("/catStart");
      },
      movietest(){
        this.$router.push("/Movietest");
      },
      sangsig(){
        this.$router.push("/ss");
      },
      components: {
        HelloWorld,
      },
    },
  };
  </script>
    <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
  * {
    font-family: "Jua", sans-serif;
  }
  .background {
    height: 100%;
    background-color: #e6e6fa;
    display: grid;
  }
  .logo2 {
    margin-left: 300px;
    width: 500px;
    height: 100px;
  }
  .inside {
    position: relative;
    background-color: white;
    width: 1200px;
    height: 750px;
    border-radius: 100px 100px 100px 100px;
  }
  .text {
    width: 700px;
  }
  .test1 {
    display: inline-block;
    margin: auto;
    text-align: center;
    margin-right: 35px;
    font-size: 21px;
  }
  .test1:hover {
    transform: scale(1.1);
  }
  .image1 {
    margin-bottom: 5px;
    display: block;
    width: 135px;
    height: 140px;
    border: solid 1px black;
  }
  .font {
    margin-bottom: 40px;
  }
  </style>