<template>
  <v-layout class="background" align-center justify-center>
    <div class="back"><img class="back1" src="/image/background.png"><img class="back2" src="/image/background.png"></div>
    <div>
      <v-layout class="inside" fill-height align-center justify-center>
        <div class="text" style="text-align: center">
          ↘ 요즘 유행하는 테스트 ! ↙
          <div class="font" style="text-align: left">
            <div class="test1" @click="foodtest">
              <img class="image1" src="/thumbnail/foodtest.png" />
              쩝쩝박사 테스트
            </div>

            <div class="test1" @click="psychotest">
              <img class="image1" src="/image/psycho/main.png" />
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
            <br />

            <search2></search2>
          </div>
          <v-btn id="start" @click="testStart">여러 테스트 보러가기</v-btn>
        </div>
      </v-layout>
    </div>
  </v-layout>
</template>
  
  <script>
import axios from "axios";
import HelloWorld from "../components/HelloWorld";
import Search2 from "@/components/Search2";
export default {
  name: "Home",
  components: {
    Search2,
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
        },
        {
          id: 2,
          name: "사이코패스 테스트",
          image: "/image/psycho/main.png",
        },
        {
          id: 3,
          name: "여자 아이돌 테스트",
          image: "/thumbnail/girlsidealTN.png",
        },
        {
          id: 4,
          name: "롤창 테스트",
          image: "/image/lol/kda.png",
        },
      ],
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
.back1{
  position: absolute;
  margin-top:150px;
  margin-left:-1000px;
  transform: scaleX(-1);
}
.back2{
  position: absolute;
  margin-top:150px;
  margin-left:500px;
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
</style>