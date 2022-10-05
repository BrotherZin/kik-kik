<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div>
            <h1>쩝쩝박사 테스트</h1>
          </div>
        </v-layout>
            <div class="image">
            <img src="..\src\thumbnail\foodmain.jpg">
          </div>
        </div>
    </v-layout>
      
  </template>
      
      <script>
  import HelloWorld from "../components/HelloWorld";
  
  export default {
    name: "Home",
    methods: {
      NextPage() {
        this.$router.push("/exampleEnd");
      },
    },
  
    components: {
      HelloWorld,
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
    width: 50px;
    height: 50px;
  }
  </style>
      