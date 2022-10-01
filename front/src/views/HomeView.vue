<template>
<v-layout class="background" align-center justify-center>
<v-layout class="inside" fill-height align-center justify-center>
  <div class="text">
    {{ keyword }}
    <v-text-field v-model="keyword"
    dense outlined label="원하는 테스트의 키워드를 검색해보세요!"
     @keyup.enter="searchresult(keyword)" 
    ></v-text-field>
    <!-- 엔터치면 검색결과 나오게 -->
    <div style="display: flex; justify-content: center;">
      <!--<v-btn type="submit" @click="search">검색</v-btn>
        버튼 추가할거면 넣기-->
      <v-btn @click="testStart">테스트 시작하기</v-btn>
    </div>
</div>
</v-layout>
</v-layout>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',
    methods: {
      testStart(){
        this.$router.push("/alltest");
      },
      // search(){
      //   this.$router.push(""); 
      // }, 검색버튼 클릭 시
      // searchresult(keyword){
      //   this.$router.push("/alltest");
      // }, 엔터 누를 시
    },
    // 검색 버튼 클릭 or 엔터 시 DB에서 검색 결과 받아와야함 
    components: {
      HelloWorld,
    },
  }
</script>
<style scoped>
  .background{
    height: 100px;
    background-color: #F0F8FF;
    height: 100%;
        background-color: #E6E6FA;
  }
  .inside{
    background-color: white;
    width:1500px;
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
