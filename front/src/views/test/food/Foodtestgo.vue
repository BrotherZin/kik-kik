<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div class="text">
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
          <label><input type="checkbox" v-model="food" value="tteogkkochi"> 떡꼬치 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="tteogbokki"> 떡볶이 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="sotteogsotteog"> 소떡소떡 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="tteoggangjeong"> 떡강정 </label><br/>
           <br>   
           <h>선택한 음식</h><p>{{ food }}</p>          
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage">다음</v-btn>
    </div>
    </div>
</v-layout>
    </div>
    </v-layout>
  </template>


  <script>
  export default {
    data(){
      return{
        food : [],
      }
    },
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
  margin-top: 30px;
  width: 450px;
  height: auto;
  max-width: 3000px;
  max-height: 3000px;
  padding-bottom: 20px;
  }
  .answer{
    width:500px;
    font-size:20px;
    font-weight:bold;
  }
  .button{
    padding-left:150px;
    padding-top:3px;
  
  }
  .text{
    padding-top:20px;
  }
  </style>
      