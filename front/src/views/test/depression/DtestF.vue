<template>
    <v-layout class="background">
      <div class="psycho-finish">
          <div class="finish-title">
              <span>우울증 자가진단 테스트 결과</span>
          </div>
          <div class="finish-img">
            <img v-if="answer < 6" src="/image/dep/D1.png"> 
            <img v-else-if="answer > 5 && answer < 11" src="image/dep/D2.png"> 
            <img v-else src="image/dep/D3.png"> 
  
          </div>
          <div class="psycho-result">
              <span><span style="color:blue">{{tester}}</span> 님은</span><br>
              <span></span>
          </div>
          <div class="result-text">
               
                    <span v-if="answer < 6" style="color:green; font-weight: bold;"> 평범한 상태 </span>
                    <span v-else-if="answer > 5 && answer < 11" style="color:orange; font-weight: bold;"> 우울증 초기 </span>
                    <span v-else style="color:red; font-weight: bold;"> 심한 우울증 </span>
              입니다.
          </div>
        <div class="psycho-prevnext">
            <div class="psyprev">
                <button @click="retry">◀ 다시 할래요 </button>
            </div>
            <div class="psynext">
                <button @click="another">다른 테스트 하기 ▶</button>
            </div>
        </div>
          <div class="link-icon">
              <span>공유하기</span>
              <div class="share-sns-list">
                  <ul class="list">
                    <li><a href="javascript: shareKakaotalk();" @click="sendkakao" class="btn-share kakao">카카오공유</a></li>
                    <li><a href="javascript: shareFacebook();" @click="sendface" class="btn-share facebook">페이스북공유</a></li>
                  </ul>
              </div>
          </div>
      </div>
    </v-layout>
  </template>
  <script>
  export default {
    data(){
        return {
            answer:this.$route.query.answer,
            tester:this.$route.query.tester
      };
  },
  methods: {
     retry() {
      this.$router.push("/Dtest");
    },
    another() {
      this.$router.push("/alltest");
    },
    sendkakao: function () {
      if (!Kakao.isInitialized()) {
        Kakao.init("ebb31377a38a9106e262ae447eba1643");
      }
      // Kakao.init('ebb31377a38a9106e262ae447eba1643');
      Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "사이코패스 테스트 결과",
          description:
            "나의 사이코패스 테스트 결과가 궁금하신가요? 테스트 하러 오세요!",
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
    sendface: function () {
      window.open(
        "https://www.facebook.com/",
        "facebook",
        "width=500, height=500, resizable=no"
      );
    },
  },
  }
  </script>
  <style>
  .background{
  background-color: #e6e6fa;
  }
  ul {
  list-style:none;
  display: inline-flex;
  margin-right: 3%;
  }
  li{
  padding: 5px;
  }
  .psycho-finish {
  margin: auto;
  text-align: center;
  background-color: white;
  width: 1400px;
  height: 1050px;
  }
  .finish-title {
  font-size: 40px;
  padding: 30px;
  }
  .finish-img img {
  z-index: 1;
  width: 300px;
  height: 300px;
  margin-bottom: 50px;
  }
  .psycho-result {
  font-size: 30px;
  }
  .result-text{
  font-size: 30px;
  padding:20px;
  }
  .share-sns-list {
  text-align: center;
  font-weight: 700;
  }
  .share-sns-list .btn-share {
  display: inline-block;
  background-position: center center;
  width: 2.5625rem;
  height: 2.5625rem;
  text-indent: -99999px;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  }
  .share-sns-list .btn-share.kakao {
  background-image: url(https://cdn.banggooso.com/assets/images/icons/btn-share-kakao.png);
  }
  .share-sns-list .btn-share.instagram {
  background-image: url(https://cdn.banggooso.com/assets/images/icons/btn-share-insta.png);
  }
  .share-sns-list .btn-share.facebook {
  background-image: url(https://cdn.banggooso.com/assets/images/icons/btn-share-facebook.png);
  }
  .share-sns-list .btn-share.link-copy {
  background-image: url(https://cdn.banggooso.com/assets/images/icons/btn-share-linkcopy.png);
  }
  .link-icon {
  text-align: center;
  }
  .psycho-prevnext {
  margin: auto;
  width: 400px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  font-size: 20px;
  }
  .psyprev {
  text-align: left;
  margin-left: -30%;
  }
  .psynext {
  text-align: right;
  margin-right: -30%;
  }
  </style>