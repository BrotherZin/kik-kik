<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div>
            <h1>무슨음식일까요?</h1>
          </div>
        </v-layout>
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/food/tteokbokki.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
          <v-text-field v-model="keyword"
    dense outlined label="정답을 입력하세요(맞춤법 틀리면 오답처리)"
     @keyup.enter="answer(keyword)"
      ></v-text-field>
    </div>
</v-layout>
    </div>
    </v-layout>
  </template>


  <script>
  export default {
    name: "Home",
    methods: {
      answer(keyword) {
        this.$router.push("/");
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
  margin-top: 50px;
  width: 450px;
  height: auto;
  max-width: 3000px;
  max-height: 3000px;
  }
  .st_btn{
    margin-top: 140px;
  }
  .answer{
    width:500px
  }
  </style>
      