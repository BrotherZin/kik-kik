<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div class="title" style="color:purple">
            <h1>영화 테스트 결과</h1>
            <div class="result-text"> 
                    <span v-if="answer < 3" style="color:black; font-weight: bold;"> "영화가 뭔가요?? " </span>
                    <span v-else-if="answer > 4 && answer < 9" style="color:black; font-weight: bold;"> "영화를 즐겨보는 정도~" </span>
                    <span v-else style="color:black; font-weight: bold;"> "영화없이 못살아! 나는야 프로 영화러" </span>
          </div>
          </div>
        </v-layout>
        <v-layout align-center justify-center>
          <div class="movieresult-img"
            style="display: block; margin: auto; width: auto; height: auto;">
            <img v-if="answer < 3" src="/image/movie/movieresult1.png"> 
            <img v-else-if="answer > 4 && answer < 9" src="/image/movie/movieresult2.jpg"> 
            <img v-else src="/image/movie/movieresult3.jpg">
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
            title: "영화 테스트 결과",
            description:
              "나의 영화 테스트 결과가 궁금하신가요? 테스트 하러 오세요!",
            imageUrl: "frontpublic\thumbnail\movie.jpg",
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
        this.$router.push("/movietestgo");
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
    height: 850px;
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