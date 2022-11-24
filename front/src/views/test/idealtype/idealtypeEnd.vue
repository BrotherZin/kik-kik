<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <div>
          <h1>아이돌 이상형 월드컵 [ 최종 우승 ]</h1>
        </div>
      </v-layout>
      <v-layout align-center justify-center>
        <div style="display: block; margin: auto; width: auto; height: auto">
          <img :src="$route.query.img" class="image" />
        </div>
      </v-layout>
      <v-layout align-center justify-center>
        <div class="result">최종 우승은 {{ $route.query.name }} 입니다 !!</div>
      </v-layout>

      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>

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
      this.$router.push("/idealtypeStart");
    },
    OtherTest() {
      this.$router.push("/alltest");
    },
    Rank() {
      this.$router.push("/");
    },
  },
  data() {
    return {
      name: "",
    };
  },
  computed: {
    name() {
      return this.$store.state.selected.name;
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
    