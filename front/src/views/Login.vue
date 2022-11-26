<template>
    <v-layout class="background" align-center justify-center>
      <div>
        <v-layout class="inside" fill-height align-center justify-center>
            <div>
                <v-text-field label="ID"/>
                <v-text-field label="PW"/>
                <v-btn class="login" align-center @click="login">로그인</v-btn>
            </div>
        </v-layout>
      </div>
    </v-layout>
  </template>
    
    <script>
  export default {

  };
  </script>
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200&display=swap');
    *{
      font-family: 'Noto Serif KR', serif;
      font-weight: bold;
    }
  .background {
    height: 100%;
    background-color: #e6e6fa;
    display: grid;
  }
  .inside {
    background-color: white;
    width: 1200px;
    height: 750px;
    margin-top: 50px;
    border-radius: 100px 100px 100px 100px;
  }
  </style>
    
  