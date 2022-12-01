<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <div class="ideal">
          <div class="bz">여자 아이돌 이상형 월드컵</div>
        </div>
      </v-layout>
      <v-layout align-center justify-center>
        <div>
          <img src="/thumbnail/girlsidealTN.png" class="image" />
        </div>
      </v-layout>
      <v-layout align-center justify-center>
        <div>
          <p class="result">
            여자 아이돌 이상형 월드컵에 오신것을 환영합니다 !
          </p>
          <p class="result">자신의 이상형이 누구일지 확인하러 가볼까요 ?</p>
        </div>
      </v-layout>

      <!-- 아니 아래 이거 공백 넣고 싶은데 못넣어서 우선 이렇게 해놓은거..  -->

      <!-- 이 공간에다가 댓글 구현하면 딱 좋을듯.. -->

      <v-layout align-center justify-center>
        <v-btn class="startbtn" @click="start"
          >▶ 지금 바로 이상형 월드컵 시작하기 ◀</v-btn
        >
      </v-layout>
    </div>
  </v-layout>
</template>
    
    <script>
export default {
  name: "Home",
  methods: {
    start() {
      this.$router.push("/girlsidealtest");
    },
  },
};
</script>
    <style scoped>
.startbtn {
  color: #00d0ff;
  background-color: red;
  width: 90%;
  margin: auto;
  text-align: center;
  line-height: 42px;
  padding: 0;
  border: none;
  font-size: 1.2rem;
  /* font-weight: bold; */
}

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
  font-family: bz;
}
.bz {
  font-size: 2.6em;
  font-family: bz;
}
@font-face {
  font-family: "bz";
  src: url("/public/fonts/BMDOHYEON_ttf.ttf");
}
.ideal{
  margin-top: 120px;
}
.v-btn{
  margin-top:30px;
}
</style>
    