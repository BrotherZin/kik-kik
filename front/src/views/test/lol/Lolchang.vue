<template>
    <v-layout class="background" align-center justify-center>
      <div class="logo">
      <a href="/"><img src="/image/kikkik.png" class="logo2"></a>
    </div>
      <div class="inside">
        <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/thumbnail/dlqmffls.png" class="image">
          </div>
          </v-layout>
          <div class="lol-text">
            <div class="lolmain"><span>너의 롤창인생 실력은?!</span></div>
          <div><v-btn @click="testStart">Ready? Go!</v-btn></div>
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
    },
  };
  </script>
      <style scoped>
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
  }
  .lol-text{
    text-align: center;
    font-size:50px;
    margin-top:40px;
  }
  .v-btn{
    width:500px;
    font-size:30px;
    font-weight: bold;
  }

  </style>
      