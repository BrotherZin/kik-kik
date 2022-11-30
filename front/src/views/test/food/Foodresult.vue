<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <div class="title" style="color:purple">
          <h1>쩝쩝박사 테스트 상장 수여식</h1>
          <div class="result-text"> 
                  <span v-if="answer < 3" style="color:black; font-weight: bold;"> 쩝쩝노력상 </span>
                  <span v-else-if="answer > 4 && answer < 9" style="color:black; font-weight: bold;"> 쩝쩝응원상 </span>
                  <span v-else style="color:black; font-weight: bold;"> 쩝쩝박사상 </span>
        </div>
        </div>
      </v-layout>
      <v-layout align-center justify-center>
        <div class="foodresult-img"
          style="display: block; margin: auto; width: auto; height: auto">
          <img v-if="answer < 3" src="/image/food/awards2.png"> 
          <img v-else-if="answer > 4 && answer < 9" src="/image/food/awards3.png"> 
          <img v-else src="/image/food/awards.png">
        </div>
      </v-layout>
      <div class="sharebutton">
        친구들에게 공유하기<br />
        <img
          class="new-result-btn"
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          @click="sendkakao"
        />
      </div>
      <div class="btn">
        <v-btn fab dark small color="pink" @click="alltest">
          <v-icon dark> mdi-arrow-left </v-icon>
        </v-btn>
        이전 페이지
        <!-- </div>
      <div class="btn2"> -->
        <v-btn fab dark small color="pink" @click="testStart">
          <v-icon dark> mdi-arrow-u-right-top </v-icon>
        </v-btn>
        다시해보기
      </div>
    </div>
  </v-layout>
</template>
    
<script>
export default {
  data() {
    return {
      answer: this.$route.query.answer,
      tester: this.$route.query.tester,
  };
},
  head() {
    return {

      script: [
        {
          src: "https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.story.min.js",
        },
      ],
    };
  },
  methods: {
    sendkakao: function () {
      if (!Kakao.isInitialized()) {
        Kakao.init("ebb31377a38a9106e262ae447eba1643");
      }
      // Kakao.init('ebb31377a38a9106e262ae447eba1643');
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "쩝쩝박사 테스트 결과",
          description:
            "나의 쩝쩝박사 테스트 결과가 궁금하신가요? 테스트 하러 오세요!",
          imageUrl: "frontpublic\thumbnail\foodtest.png",
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
    alltest() {
      this.$router.push("/alltest");
    },
    testStart() {
      this.$router.push("/foodtestgo");
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
  margin-top: 15px;
  width: auto;
  height: auto;
  max-width: 1000px;
  max-height: 900px;
}
.st_btn {
  margin-top: 140px;
}

.btn {
  padding-right: 1px;
}
.btn2 {
  padding-bottom: 50px;
  padding-left: 1300px;
}
.title {
  margin-top: 50px;
}
.img {
  border-radius: 5px;
}

.new-result-btn {
  width: 50px;
  height: 42px;
  border-radius: 10px;
  border: 2px solid #636366;
}
.sharebutton {
  padding-top: 3px;
  padding-bottom: 20px;
}
.result-text{
font-size:35px;
}
</style>