<template>
  <v-layout class="background" align-center justify-center>
    <div>
      <v-layout class="inside" fill-height align-center justify-center>
        <div class="text" style="text-align: center">
          <div class="font" style="text-align: left">
            요즘 유행하는 테스트!
            <search2></search2>
            <div id="food" class="test1" @click="foodtest">
            <img class="image1" src="/thumbnail/foodtest.png" />
            쩝쩝박사 테스트
          </div>

          <div id="psycho" class="test1" @click="psychotest">
            <img class="image1" src="/image/psycho/main.png" />
            사이코패스 테스트
          </div>

          <div id="girl" class="test1" @click="girlsideal">
            <img class="image1" src="/thumbnail/girlsidealTN.png" />
            여자이상형 월드컵
          </div>

          <div id="lol1" class="test1" @click="Lolchango">
            <img class="image1" src="/image/lol/kda.png" />
            롤창 테스트
          </div>
          </div>
          <v-btn id="start" @click="testStart">테스트 시작하기</v-btn>
        </div>
      </v-layout>
    </div>
  </v-layout>
</template>
  
  <script>
import HelloWorld from "../components/HelloWorld";
import Search2 from "@/components/Search2"
export default {
  name: "Home",
  components: {
        Search2
      },
  data() {
    return {
      id:"",
          name:"",
          tests:[
      {
          id: 1,
          name: '쩝쩝박사 테스트',
          image: '/thumbnail/foodtest.png'
      },
      {
          id: 2,
          name: '사이코패스 테스트',
          image: '/image/psycho/main.png'
      },
      {
          id: 3,
          name: '여자 아이돌 테스트',
          image: '/thumbnail/girlsidealTN.png'
      },
      {
          id: 4,
          name: '롤창 테스트',
          image: '/image/lol/kda.png'
      }
              ]
    };
  },
  methods: {
    testStart() {
      this.$router.push("/alltest");
    },
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
    ramenTest() {
      this.$router.push("/ramenStart");
    },
    Lolchango() {
      this.$router.push("/Lolchang");
    },
    //   search(){
    //     this.$router.push("");
    //   }, //검색버튼 클릭 시
    //   searchresult(keyword){
    //     this.$router.push("/alltest");
    //   }, //엔터 누를 시
    // // 검색 버튼 클릭 or 엔터 시 DB에서 검색 결과 받아와야함
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
  background-color: white;
  width: 1200px;
  height: 750px;
  margin-top: 50px;
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
  margin-top: 50px;
  margin-bottom: 40px;
}
#start {
  margin-top: 30px;
  width: 400px;
  font-size: 35px;
}
.search2{
  border:1px solid black
}
</style>