<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <div>
          <div class="bz">진짜 무서운 귀신 월드컵 [ 최종 우승 ]</div>
        </div>
      </v-layout>
      <v-layout align-center justify-center>
        <div style="display: block; margin: auto; width: auto; height: auto">
          <img :src="$route.query.img" class="image" />
        </div>
      </v-layout>

      <div>&nbsp;</div>

      <v-layout align-center justify-center>
        <div class="result">최종 우승은 {{ $route.query.name }} 입니다 !!</div>
      </v-layout>
      <div>&nbsp;</div>
      <div>&nbsp;</div>

      <v-layout align-center justify-center>
        <v-btn class="mr-2 pink white--text" @click="Restart"
          ><v-icon dark> mdi-arrow-u-right-top-bold </v-icon> 한번 더
          하기</v-btn
        >
        <v-btn class="ml-2 blue white--text" @click="OtherTest"
          ><v-icon dark> mdi-home-circle-outline </v-icon> 메인으로
          이동하기</v-btn
        >
      </v-layout>
    </div>
  </v-layout>
</template>
    
    <script>
export default {
  name: "Home",
  methods: {
    Restart() {
      this.$router.push("/ghostStart");
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
  font-size: 1.7em;
  font-family: bz;
}
.bz {
  font-size: 2.3em;
  font-family: bz;
}
@font-face {
  font-family: "bz";
  src: url("/public/fonts/BMDOHYEON_ttf.ttf");
}
</style>
    