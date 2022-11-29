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
      <div id="tests">
          <span class="box">
            <img class="image1" src="/thumbnail/foodtest.png" @click="foodtest" />
          </span>
          <span>
            <img class="image1" src="/image/psycho/main.png" @click="psychotest"/>
          </span>
          <span>
            <img class="image1" src="/thumbnail/girlsidealTN.png" @click="girlsideal"/>
          </span>
          <span>
            <img class="image1" src="/image/lol/kda.png" @click="Lolchango" />
          </span>
          <span>
            <img class="image1" src="/thumbnail/box.png" @click="Lolskin" />
          </span>
          <span>
            <img class="image1" src="/thumbnail/mansidealTN.png" @click="mansideal"/>
          </span>
          <span>
            <img class="image1" src="/thumbnail/ramenTN.png" @click="ramenTest" />
          </span>
          <span>
            <img class="image1" src="/image/dep/main.png" @click="Dtest" />
          </span>
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
.image {
  display: inline-block;
  padding: 20px;
}
.font {
  margin-top: 50px;
  margin-bottom: 40px;
}
.image1 {
  width: 135px;
  height: 140px;
  border: solid 1px black;
  margin-right: 35px;
}
.box{
  height: 500px;
}
.v-text-field {
  padding: 0px;
  border: none;
}
</style>