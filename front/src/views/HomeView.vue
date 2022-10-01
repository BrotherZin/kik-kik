<template>
  
  <v-layout class="background" align-center justify-center>
    <div>
  <v-layout class="inside" fill-height align-center justify-center>
    <div class="text" style="text-align : center;">
      <v-text-field label="키워드 검색"
      placeholder="원하는 테스트의 키워드를 검색해보세요!"
      v-model="keyword"
      ></v-text-field>
      <div class="font" style="text-align : left;" >
      └요즘 유행하는 테스트!
      </div>
      {{ keyword }}
        <div class="image1">
          <img src="../..\src\assets\dd.png">
        </div>
        <div class="image2">
          <img src="../..\src\assets\dd.png">
        </div>
        <div class="image3">
          <img src="../..\src\assets\dd.png">
        </div>
          <div class="image4">
          <img src="../..\src\assets\dd.png">
        </div>
    <v-btn @click="testStart">테스트 시작하기</v-btn>
      </div>
  </v-layout>
    </div>
  </v-layout>
  </template>
  
  <script>
    import HelloWorld from '../components/HelloWorld'
  
    export default {
      name: 'Home',
      methods: {
        testStart(){
          this.$router.push("/alltest");
        }
      },
  
      components: {
        HelloWorld,
      },
    }
  </script>
  <style scoped>
    .background{
      height: 100%;
          background-color: #E6E6FA;
    }
    .inside{
      background-color: white;
      width:1200px;
      height: 750px;
      margin-top: 50px;
      border-radius: 100px 100px 100px 100px;
    }
    .text{
      width: 700px;
    }
    .image1, .image2, .image3, .image4{
      display: inline-block;
      padding: 20px;
      margin-top:50px;
    }
  </style>
  