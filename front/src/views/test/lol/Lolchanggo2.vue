<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
            <video src="/videos/ahri.mp4" class="ahri" autoplay="" muted loop></video>
          </div>
          </v-layout>
          <div class="lol-text">
            <div class="lolmain"><span>무슨 스킬이게?</span></div>
          <div><v-btn @click="testStart">매혹</v-btn></div>
          <div><v-btn @click="testStart">황홀한 저주</v-btn></div>
          <div><v-btn @click="testStart">앙코르</v-btn></div>
          <div><v-btn @click="testStart">매혹의 질주</v-btn></div>
        </div>
    </div>
    </v-layout>
 
      
  </template>
      
      <script>
  // import HelloWorld from "../components/HelloWorld";
  
  export default {
    name: "Home",
    methods: {
      testStart() {
        this.$router.push("/lolchanggo2");
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
  .ahri{
    margin-top:70px;
  }
  </style>
      