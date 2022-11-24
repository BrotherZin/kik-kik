<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div class="title">
            <h1>쩝쩝박사 테스트 결과</h1><br>
          </div>
        </v-layout>
        <v-layout align-center justify-center>
          <div class=img style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/food/awards.png" class="image">
          </div>
        </v-layout>
        <div class="sharebutton">
            친구들에게 공유하기<br>
        <img
          class="new-result-btn"
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          @click="sendkakao"/> 
     </div>
        <div class="btn">
          <v-btn fab dark small color="pink" @click="alltest">
      <v-icon dark>
        mdi-arrow-left
      </v-icon>
    </v-btn>
    이전 페이지
        </div>
        <div class="btn2">
          <v-btn fab dark small color="pink" @click="testStart">
      <v-icon dark>
        mdi-arrow-u-right-top
      </v-icon>
    </v-btn>
    다시해보기
        </div>
        </div>
    </v-layout>
    
 
  </template>
      
  <script>

  export default {
    head() {
            return {
                script: [
                    {src: 'https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.story.min.js'},
                ],
            }
        },
    methods: {
        sendkakao: function () {
        Kakao.init('ebb31377a38a9106e262ae447eba1643');
        Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '쩝쩝박사 테스트 결과',
            description: '나의 쩝쩝박사 테스트 결과가 궁금하신가요? 테스트 하러 오세요!',
            imageUrl:
            'front\public\thumbnail\foodtest.png',
            link: {
            mobileWebUrl: 'http://localhost:8000',
            webUrl: 'http://localhost:8000',
             },
            },
            buttons: [
                {
                title: '웹으로 보기',
                link: {
                         mobileWebUrl: 'http://localhost:8000',
                         webUrl: 'http://localhost:8000',
                     },
                 },
             ],
        })
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
  .st_btn{
    margin-top: 140px;
  }
  
  .btn{
    padding-right: 300px;
  }
  .btn2{
    padding-bottom: px;
    padding-left: 1300px;
  }

  .title{
    margin-top: 50px;
  }
  .img{
    border-radius: 5px;
  border: 2px solid #636366;
  }

  .new-result-btn {
  height: 42px;
  border-radius: 10px;
  border: 2px solid #636366;
}

.sharebutton{
    padding-top: 20px;
    padding-left: 600px;
}
  </style>
      
