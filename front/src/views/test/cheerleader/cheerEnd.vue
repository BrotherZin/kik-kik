<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <div>
          <div class="bz">치어리더 이상형 [ 최종 우승 ]</div>
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
      <div class="sharebutton">
        ↘ 카카오톡으로 친구들에게 공유하기 ↙<br />
        <img
          class="new-result-btn"
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          @click="sendkakao"
        />
      </div>

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
  head() {
    return {
      script: [
        {
          src: "https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.story.min.js",
        },
      ],
    };
  },
  name: "Home",
  methods: {
    sendkakao: function () {
      if (!Kakao.isInitialized()) {
        Kakao.init("134ef0b6fc4db9ca3f6b61bf9521cc81");
      }
      // Kakao.init('ebb31377a38a9106e262ae447eba1643');
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "치어리더 이상형 월드컵 결과",
          description:
            "나의 치어리더 이상형 월드컵 결과가 궁금하신가요? 테스트 하러 오세요!",
          imageUrl: "frontpublic\thumbnailgirlsidealTN.png",
          link: {
            mobileWebUrl: "http://localhost:8000",
            webUrl: "http://localhost:8000",
          },
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: "http://localhost:8000",
              webUrl: "http://localhost:8000",
            },
          },
        ],
      });
    },
    Restart() {
      this.$router.push("/cheerStart");
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
.sharebutton {
  padding-top: 3px;
  padding-bottom: 10px;
}
.new-result-btn {
  width: 50px;
  height: 42px;
  border-radius: 10px;
  border: 2px solid #636366;
}
</style>
    