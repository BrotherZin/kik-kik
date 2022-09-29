<template>
  
  <v-layout class="background" align-center justify-center>
    <div>
  <v-layout class="inside" fill-height align-center justify-center>
    <div class="text">
      <v-text-field label="키워드 검색"
      placeholder="원하는 테스트의 키워드를 검색해보세요!"
      v-model="keyword"
      ></v-text-field>
      {{ keyword }}
      <div  style="display: flex; justify-content: center;">
    <v-btn @click="testStart">테스트 시작하기</v-btn>
      </div>
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
    .v-btn{
      margin-top: 500px;
    }
  
  </style>
  