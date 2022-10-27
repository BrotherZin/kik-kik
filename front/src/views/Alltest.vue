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
        </div>
        {{ keyword }}
        <!--<v-btn type="submit" @click="search">검색</v-btn>
        버튼 추가할거면 넣기-->

        <img class="image1" src="/thumbnail/foodtest.png" @click="foodtest" />

        <img
          class="image1"
          src="/image/idealtype/minji.png"
          @click="psychotest"
        />

        <img class="image1" src="/image/idealtype/iu2.png" @click="example1" />

        <img class="image1" src="/image/idealtype/kda.png" @click="lolchango" />

        <div class="image">
          <img src="/image/dd.png" />
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
    idealtype() {
      this.$router.push("/idealtypeStart");
    },
    lolchango() {
      this.$router.push("/lolchang");
    },
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
.v-text-field {
  padding: 0px;
  border: none;
}
</style>