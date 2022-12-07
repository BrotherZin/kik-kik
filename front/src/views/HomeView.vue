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
          <!-- <input type="text" v-model="search" /> -->
          <v-btn @click="search">검색</v-btn>
          <!-- <div>{{ value1 }}</div> -->
          <!-- <v-autocomplete rounded solo></v-autocomplete> -->
          <!-- <v-col>
            <v-text-field
              v-model="searchkeyword"
              dense
              outlined
              label="원하는 테스트의 키워드를 검색해보세요!"
              full-width
              :style="{ marginTop: '10px' }"
            />
            <v-btn @click="searchstart" :style="{ marginTop: '10px' }"
              >검색</v-btn
            > -->
          <!-- </v-col> -->

          <div class="font" style="text-align: left">
            └요즘 유행하는 테스트!
          </div>
          <!--<v-btn type="submit" @click="search">검색</v-btn>
        버튼 추가할거면 넣기-->
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
            여자아이돌 월드컵
          </div>

          <div id="lol1" class="test1" @click="Lolchango">
            <img class="image1" src="/image/lol/kda.png" />
            롤창 테스트
          </div>
          <v-btn id="start" @click="testStart">테스트 시작하기</v-btn>
        </div>
      </v-layout>
    </div>
  </v-layout>
</template>
  
  <script>
import axios from "axios";
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  data() {
    return {
      search: "",
      value1: "",
    };
  },
  methods: {
    search() {
      //키워드에 맞는 게시물로 이동
      window.location.href = "http://localhost:8080/" + this.search;
    },
    // search(testname, id) {
    //   // 검색된 게시글 클릭시 해당 게시글로 이동
    //   window.location.href = "http://localhost:8080/" + id;
    // },
    // search() {
    //   if (this.search[0] == "여") {
    //     this.value1 = "여자 아이돌 월드컵";
    //   } else {
    //     this.value1 = "테스트를 못찾았어요.. 다시 입력해주세요 !";
    //   }
    // },

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
</style>
  
