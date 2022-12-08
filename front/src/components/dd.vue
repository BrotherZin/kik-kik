<template>
    <div class="search">
      <!-- <input type="text" id="searchInput">
        <button id="searchBtn">{{search}}</button>
          <ul :src="tests.image" id="list">
            {{tests}}
          </ul> -->
          <search2></search2>
    
    </div>
    </template>
    
    <script>
    import Search2 from "@/components/Search2"
    export default {
      components: {
        Search2
      },
      data(){
      return{
          id:"",
          name:"",
          tests:[
      {
          id: 1,
          name: '쩝쩝박사 테스트',
          image: '/thumbnail/foodtest.png'
      },
      {
          id: 2,
          name: '사이코패스 테스트',
          image: '/image/psycho/main.png'
      },
      {
          id: 3,
          name: '여자 아이돌 테스트',
          image: '/thumbnail/girlsidealTN.png'
      },
      {
          id: 4,
          name: '롤창 테스트',
          image: '/image/lol/kda.png'
      }
              ]
          };
      },
      methods:{ 
      
      }
    }
    </script>
    
    <style>
    
    </style>