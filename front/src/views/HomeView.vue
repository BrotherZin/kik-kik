<template>
  <v-layout class="background" align-center justify-center>
  <div>
    <v-text-field label="키워드 검색"
    placeholder="원하는 테스트의 키워드를 검색해보세요!"
    v-model="keyword"
    ></v-text-field>
    {{ keyword }}
  <v-btn @click="testStart">테스트 시작하기</v-btn>
</div>
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
