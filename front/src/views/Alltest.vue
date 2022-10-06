<template>
<v-layout class="background" align-center justify-center>
    <div>
  <v-layout class="inside" fill-height align-center justify-center>
    <div class="text" style="text-align : center;">
      <v-text-field v-model="keyword"
    dense outlined label="원하는 테스트의 키워드를 검색해보세요!"
     @keyup.enter="searchresult(keyword)"
      ></v-text-field>
      {{ keyword }}
       <!--<v-btn type="submit" @click="search">검색</v-btn>
        버튼 추가할거면 넣기-->
        <div class="image">
          <img src="../..\src\assets\dd.png" @click="foodtest">
        </div>
        <div class="image">
          <img src="../..\src\assets\dd.png" @click="psychotest">
        </div>
        <div class="image">
          <img src="../..\src\assets\dd.png" @click="example1">
        </div>
        <div class="image">
          <img src="../..\src\assets\dd.png">
        </div>
        <div class="image">
          <img src="../..\src\assets\dd.png">
        </div>
        <div class="image">
          <img src="../..\src\assets\dd.png">
        </div>
        <div class="image">
          <img src="../..\src\assets\dd.png">
        </div>
        <div class="image">
          <img src="../..\src\assets\dd.png">
        </div>
        <div class="image">
          <img src="../..\src\assets\dd.png">
        </div>
        <div class="image">
          <img src="../..\src\assets\dd.png">
        </div>
        <div class="image">
          <img src="../..\src\assets\dd.png">
        </div>
        <div class="image">
          <img src="../..\src\assets\dd.png">
        </div>
      </div>
  </v-layout>
    </div>
  </v-layout>
  </template>
    
    <script>
import HelloWorld from "../components/HelloWorld"

export default {
  name: "Home",
  methods: {
    foodtest() {
      this.$router.push("/foodtest")

    },
    psychotest(){
      this.$router.push("/psychotest")
    },
    example1(){
      this.$router.push("/example1")
    }
  },

  components: {
    HelloWorld,
  },
};
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
  .image{
    display: inline-block;
    padding: 20px;
  }
  .font{
    margin-top:50px;
    margin-bottom: 40PX;
  }
</style>