<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div>
            <h1>내가 영화를 얼마나 잘 알까?<br>영화테스트</h1>
            
          </div>
        </v-layout>
        <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/thumbnail/movie.jpg" class="image" />
          </div>
        </v-layout>
        <div class="st_btn" align-center justify-center>
          <v-btn large style="background-color: #AA88FF" @click="testStart"
          ><span>테스트 시작하기♪( 'ω' و(و"</span></v-btn
          >
        </div>
        <div class="btn">
          <v-btn fab dark small color="pink" @click="alltest">
            <v-icon dark> mdi-arrow-left </v-icon>
          </v-btn>
          이전 페이지로 돌아가기(۶•̀ᴗ•́)۶
      </div>
    </div>
    </v-layout>
  </template>
        
    <script>
  export default {
    name: "Home",
    methods: {
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
    height: 750px;
    margin-top: 50px;
    border-radius: 100px 100px 100px 100px;
  }
  .image {
    margin-top: 15px;
    width: 800px;
    height: 400px;
  }
  .st_btn {
    margin-top: 50px;
  }
  
  .btn {
    padding-right: 1100px;
  }
  h1{
    margin-top:30px;
  }
  </style>
        