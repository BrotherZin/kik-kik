<template>
  <v-layout class="background" align-center justify-center>
    <div>
      <v-layout class="inside" fill-height align-center justify-center>
        <div class="text" style="text-align: center">
          <div>
            <v-select
              :items="searchoption"
              v-model="searchoptionselected"
              :style="{ width: '140px' }"
            />
            <v-text-field
              class="field"
              v-model="searchkeyword"
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

            <div class="test1" @click="psychotest">
              <img class="image1" src="/image/psycho/main.png" />
              사이코패스 테스트
            </div>

            <div class="test1" @click="girlsideal">
              <img class="image1" src="/thumbnail/girlsidealTN.png" />
              여자 아이돌 월드컵
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
              남자 아이돌 월드컵
            </div>

            <div class="test1" @click="ramenTest">
              <img class="image1" src="/thumbnail/ramenTN.png" />
              라면 월드컵
            </div>

            <div class="test1" @click="Dtest">
              <img class="image1" src="/image/dep/main.png" />
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

            <div class="test1" @click="gameWorldcup">
              <img class="image1" src="/thumbnail/gameTN.jpg" />
              추억의게임 월드컵
            </div>

            <div class="test1" @click="ghost">
              <img class="image1" src="/thumbnail/ghostTN.png" />
              무서운귀신 월드컵
            </div>

            <div class="test1" @click="cat">
              <img class="image1" src="/thumbnail/catTN.png" />
              최강 냥냥 월드컵
            </div>
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
  data() {
    return {
      searchkeyword: "", //검색어
      keyword: "",
      searchoption: ["테스트 제목", "테스트 설명", "테스트 키워드"], //검색옵션
      searchoptionselected: "테스트 제목", //검색옵션 선택
      searchfinish: false, //검색완료
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
.test1 {
  display: inline-block;
  margin: auto;
  text-align: center;
  margin-right: 35px;
  font-size: 21px;
  font-family: "Jua", sans-serif;
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
.box {
  height: 500px;
}
.v-text-field {
  padding: 0px;
  border: none;
}
</style>