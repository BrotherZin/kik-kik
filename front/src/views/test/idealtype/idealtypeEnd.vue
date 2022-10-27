<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <div>
          <h1>아이돌 이상형 월드컵 [ 우승 ]</h1>
        </div>
      </v-layout>
      <v-layout align-center justify-center>
        <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="/image/iu2.png" class="image" />
        </div>
      </v-layout>
      <v-layout align-center justify-center>
        <div class="result">최종 우승은 [ 아이유 ] 입니다 !!</div>
      </v-layout>

      <!-- 아니 아래 이거 공백 넣고 싶은데 못넣어서 우선 이렇게 해놓은거..  -->

      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <!-- 이 공간에다가 댓글 구현하면 딱 좋을듯.. -->

      <v-layout align-center justify-center>
        <v-btn class="mr-2 pink white--text" @click="Restart"
          >한번 더 하기</v-btn
        >
        <v-btn class="ml-2 blue white--text" @click="OtherTest"
          >다른 테스트 보러가기</v-btn
        >
        <v-btn class="ml-4 purple white--text" @click="Rank">랭킹 보기</v-btn>
      </v-layout>
    </div>
  </v-layout>
</template>
    
    <script>

export default {
  name: "Home",
  methods: {
    Restart() {
      this.$router.push("/example1");
    },
    OtherTest() {
      this.$router.push("/alltest");
    },
    Rank() {
      this.$router.push("/");
    },
  },
};
</script>
    <style scoped>
.background {
  height: 100px;
  background-color: #f0f8ff;
  height: 100%;
  background-color: #e6e6fa;
}
.inside {
  background-color: white;
  width: 1500px;
  height: 750px;
  margin-top: 50px;
  border-radius: 100px 100px 100px 100px;
}
.image {
  width: auto;
  height: auto;
  max-width: 500px;
  max-height: 500px;
}
.vs {
  font-size: 2.2em;
  font-weight: bold;
}
.result {
  font-size: 1.2em;
  font-weight: bold;
}
</style>
    