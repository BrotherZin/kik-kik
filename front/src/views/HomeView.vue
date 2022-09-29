<template>
<v-layout class="background" align-center justify-center>
<v-layout class="inside" fill-height align-center justify-center>
    <v-text-field label="키워드 검색"
    placeholder="원하는 테스트의 키워드를 검색해보세요!"
    v-model="keyword"
    ></v-text-field>
    {{ keyword }}
    
  <v-btn @click="testStart">테스트 시작하기</v-btn>
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
      }
    },

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

</style>
