<template>
  <v-layout class="background" align-center justify-center>
    <div class="logo">
      <a href="/"><img src="/image/kikkik.png" class="logo2"></a>
    </div>
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
          
          <img class=" image1" src="/thumbnail/idealTN.png" @click="example1">
  
          <img class=" image1" src="/image/lol/kda.png" @click="lolchango">

          <v-btn @click="testStart">테스트 시작하기</v-btn>
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
  width:400px;
    font-size:35px;
}
</style>
  
