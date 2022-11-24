<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div>
            <h1>쩝쩝박사 테스트</h1>
          </div>
        </v-layout>
        <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/thumbnail/foodtest.png" class="image">
          </div>
          </v-layout>
          <v-layout class="st_btn" align-center justify-center>
          <v-btn large style="background-color: #c74eff" @click="testStart">테스트 시작하기</v-btn>
        </v-layout>
        <div class="btn">
          <v-btn fab dark small color="pink" @click="alltest">
      <v-icon dark>
        mdi-arrow-left
      </v-icon>
    </v-btn>
    이전 페이지
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
  </style>
      