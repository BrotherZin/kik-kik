<template>
  <v-layout class="background" align-center justify-center>
    <div>
      <v-layout class="inside" fill-height align-center justify-center>
        <div class="text" style="text-align: center">
          <v-text-field
            class="field"
            v-model="keyword"
            dense
            outlined
            label="원하는 테스트의 키워드를 검색해보세요!"
            @keyup.enter="searchresult(keyword)"
            ></v-text-field>
          {{ keyword }}
          <!--<v-btn type="submit" @click="search">검색</v-btn>
          버튼 추가할거면 넣기-->
          
          <div class="test1" @click="foodtest">
          <img class="image1" src="/thumbnail/foodtest.png" />
          쩝쩝박사 테스트
        </div>
        
        <div class="test1"  @click="psychotest">
          <img class="image1" src="/image/psycho/main.png"/>
          사이코패스 테스트
        </div>

        <div class="test1" @click="girlsideal">
          <img class="image1" src="/thumbnail/girlsidealTN.png"/>
           여자이상형 월드컵
        </div>

        <div class="test1" @click="Lolchango">
          <img class="image1" src="/image/lol/kda.png"/>
          롤창 테스트
        </div>
        <div class="test1" @click="Lolskin">
          <img class="image1" src="/thumbnail/box.png" />
          롤 흑우력 테스트
        </div>
        
        <div class="test1"  @click="mansideal">
          <img class="image1" src="/thumbnail/mansidealTN.png"/>
          남자이상형 월드컵
        </div>

        <div class="test1" @click="ramenTest">
          <img class="image1" src="/thumbnail/ramenTN.png"/>
           라면 월드컵
        </div>

        <div class="test1" @click="Dtest">
          <img class="image1" src="/image/dep/main.png"/>
          우울증 테스트
        </div>
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
    Dtest(){
      this.$router.push("/Dtest");
    }
  },
  components: {
    HelloWorld,
  },
};
</script>
  <style scoped>
.background {
  height: 100%;
  background-color: #e6e6fa;
  display: grid;
}
.logo {
  display: flex;
  margin-right: 100px;
}
.inside {
  background-color: white;
  width: 1200px;
  height: 750px;
  border-radius: 100px 100px 100px 100px;
}
.text {
  width: 700px;
}
.font {
  margin-top: 50px;
  margin-bottom: 40px;
}
.test1{
  display: inline-block;
  margin-top: 20px;
  text-align: center;
  margin-right: 35px;
  font-weight: bold;
}
.test1:hover{
  transform: scale(1.1);
}
.image1 {
  margin-bottom: 5px;
  display:block;
  width: 135px;
  height: 140px;
  border: solid 1px black;
}
.box{
  height: 500px;
}
.v-text-field {
  padding: 0px;
  border: none;
}
</style>