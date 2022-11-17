<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/lol/lolskin.png" class="image">
          </div>
          </v-layout>
          <div class="lol-text">
            <vue-typer class="lolskin"
                   :text='["너의 지갑을 얼마나 바쳤는지 테스트 해보자!"]'
                   :repeat='Infinity'
                   initial-action='typing'
                   :pre-type-delay='70'
                   :type-delay='100'
                   :pre-erase-delay='5000'
                   :erase-delay='10'
                   erase-style='select-back'
                   :erase-on-complete='test'
                   caret-animation='smooth'
        ></vue-typer>
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
        this.$router.push("/Lolskin2");
      },
    },
  };
  </script>
      <style scoped>
     .lol-text .lolskin{
    font-size : 50px;
   }
  .background {
    height: 100px;
    background-color: #f0f8ff;
    height: 100%;
    background-color: #e6e6fa;
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
      