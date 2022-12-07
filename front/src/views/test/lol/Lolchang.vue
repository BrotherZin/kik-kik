<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/thumbnail/dlqmffls.png" class="image">
          </div>
          </v-layout>
          <div class="lol-text">
            <div class="lolmain"><span>너의 롤창인생 실력은?!</span></div>
          <span><v-btn class="gu" @click="testStart">챔피언 보러가기!</v-btn></span>
        </div>
    </div>
    </v-layout>
 
      
  </template>
      
      <script>
  
  export default {
    name: "Home",
    methods: {
      testStart() {
        this.$router.push("/Lolchanggo2");
      },
      testStart2() {
        this.$router.push("/Lolchanggo3");
      }
    },
  };
  </script>
      <style scoped>
      @import url('https://fonts.googleapis.com/css?family=Yeon+Sung:400');

* {
  font-family: 'Yeon Sung', cursive;
}
  .background {
  height: 100%;
  background-color: #e6e6fa;
  display: grid;
}
.logo2{
  width: 500px;
  height: 100px;
}
  .inside {
    background-color: white;
    width: 1500px;
    height: 900px;
    margin-top: 50px;
    border-radius: 100px 100px 100px 100px;
  }
  .image {
  margin-top: 50px;
  width: auto;
  height: auto;
  max-width: 1000px;
  max-height: 900px;
  border-radius: 50px 50px 50px 50px;
  }
  .lol-text{
    text-align: center;
    font-size:70px;
    margin-top:40px;
  }
  .v-btn{
    width:300px;
    font-size:30px;
    font-weight: bold;
  }
  .gu{
  }
  
  </style>
      