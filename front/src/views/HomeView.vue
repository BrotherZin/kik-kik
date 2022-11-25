<template>
  <v-layout class="background" align-center justify-center>
    <div>
      <v-layout class="inside" fill-height align-center justify-center>
        <div class="text" style="text-align: center">
          <v-text-field
            v-model="keyword"
            dense
            outlined
            label="원하는 테스트의 키워드를 검색해보세요!"
            @keyup.enter="searchresult(keyword)"
          ></v-text-field>
          {{ keyword }}
          <div class="font" style="text-align: left">
            └요즘 유행하는 테스트!
          </div>
          <!--<v-btn type="submit" @click="search">검색</v-btn>
        버튼 추가할거면 넣기-->
          <img class="image1" src="/thumbnail/foodtest.png" @click="foodtest">
          
          <img class="image1" src="/image/psycho/main.png" @click="psychotest">
          
          <img class=" image1" src="/image/idealtype/iu2.png" @click="example1">
  
          <img class=" image1" src="/image/lol/kda.png" @click="lolchango">

          <v-btn @click="testStart" class="custom-btn btn-12"><span>시작하기!</span><span>Ready??</span></v-btn>
        </div>
      </v-layout>
    </div>
  </v-layout>
</template>
  
  <script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  methods: {
    testStart() {
      this.$router.push("/alltest");
    },
    foodtest() {
        this.$router.push("/foodtest")
      },
      psychotest(){
        this.$router.push("/psychotest")
      },
      example1(){
        this.$router.push("/idealtypeStart")
      },
      lolchango(){
        this.$router.push("/lolchang")
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
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200&display=swap');
  *{
    font-family: 'Noto Serif KR', serif;
    font-weight: bold;
  }
.background {
  height: 100%;
  background-color: #e6e6fa;
  display: grid;
}
.logo2{
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
.image1{
  display: inline-block;
  margin-bottom: 20px;
  width: 135px;
  height: 140px;
  border: solid 1px black;
  margin-right: 35px;
}
.font {
  margin-top: 50px;
  margin-bottom: 40px;
}
.v-btn{
  margin-top:30px;
    font-size:35px;
}
span{
  color:#2828CD;
  text-shadow:1px 3px 2px #C0FFFF;
}

.image1 figure {
  position: relative;
}
.image1 figure::before {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: block;
  content: '';
  width: 0;
  height: 0;
  background: rgba(255,255,255,.2);
  border-radius: 100%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
}
.image1 figure:hover::before {
  -webkit-animation: circle .75s;
  animation: circle .75s;
}
@-webkit-keyframes circle {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  100% {
    width: 200%;
    height: 200%;
    opacity: 0;
  }
}
@keyframes circle {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  100% {
    width: 200%;
    height: 200%;
    opacity: 0;
  }
}
.btn-12{
  position: relative;
  right: 20px;
  bottom: 20px;
  border:none;
  box-shadow: none;
  width: 300px;
  height: 50px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}
.btn-12 span {
  background: rgb(0,172,238);
background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
  display: block;
  position: absolute;
  width: 300px;
  height: 50px;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  border-radius: 5px;
  margin:0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.btn-12 span:nth-child(1) {
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-12:hover span:nth-child(1) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-12:hover span:nth-child(2) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
 color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}
</style>
  
