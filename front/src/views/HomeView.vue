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
          <div class="image1">
            <img src="/image/dd.png" />
          </div>
          <div class="image2">
            <img src="/image/dd.png" />
          </div>
          <div class="image3">
            <img src="/image/dd.png" />
          </div>
          <div class="image4">
            <img src="/image/dd.png" />
          </div>
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
.image1,
.image2,
.image3,
.image4 {
  display: inline-block;
  padding: 20px;
}
.font {
  margin-top: 50px;
  margin-bottom: 40px;
}
</style>
  
