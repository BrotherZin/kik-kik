<template>
    <div class="search">
        <input
      v-model="keyword"
      type="text"
      id="searchInput"
      placeholder="플레이 하고 싶은 테스트를 검색 후 클릭해보세요 !"
    />
    {{ keyword }}
    <div>
      <ul>
        <li v-if="keyword" v-for="(test, key) in showList()" :key="key">
          <router-link :to="test.url">
            <img :src="test.image" :alt="test.name" />
          </router-link>
          <p>{{ test.name }}</p>
        </li>
        </ul>
    </div>
    </div>
    </template>
    
<script>
    export default {
        components: {
        Search3,
         },
        data(){
        return{
            id:"",
            name:"",
            keyword:"",
            tests:[
                    {
                        id: 1,
                        name: '쩝쩝박사 테스트',
                        image: '/thumbnail/foodtest.png',
                        url: '/foodtest',
                    },
                    {
                        id: 2,
                        name: '사이코패스 테스트',
                        image: '/image/psycho/main.png',
                        url: '/psychotest',
                    },
                    {
                        id: 3,
                        name: '여자 아이돌 테스트',
                        image: '/thumbnail/girlsidealTN.png',
                        url: '/girlsidealtypeStart',
                    },
                    {
                        id: 4,
                        name: '롤창 테스트',
                        image: '/image/lol/kda.png',
                        url: '/lolchang',
                    },
                    {
                        id: 5,
                        name: '롤 흑우력 테스트',
                        image: '/thumbnail/box.png',
                        url: '/Lolskin',
                    },
                    {
                        id: 6,
                        name: '남돌 월드컵',
                        image: '/thumbnail/mansidealTN.png',
                        url: '/mansidealtypeStart',
                    },
                    {
                        id: 7,
                        name: '라면 월드컵',
                        image: '/thumbnail/ramenTN.png',
                        url: '/ramenStart',
                    },
                    {
                        id: 8,
                        name: '우울증 테스트',
                        image: '/image/dep/main.png',
                        url: "/Dtest",
                    },
                    {
                        id: 9,
                        name: '남자 배우 월드컵',
                        image: '/thumbnail/manActorTN.png',
                        url: "/manactorStart",
                    },
                    {
                        id: 10,
                        name: '치어리더 월드컵',
                        image: '/thumbnail/cheerTN.png',
                        url: "/cheerleaderStart",
                    },
                    {
                        id: 11,
                        name: '여자 배우 월드컵',
                        image: '/thumbnail/girlActorTN.png',
                        url: "/girlactorStart",
                    },
                    {
                        id: 12,
                        name: '추억게임 월드컵',
                        image: '/thumbnail/gameTN.jpg',
                        url: "/gameStart",
                    },
                    {
                        id: 13,
                        name: '호러 귀신 월드컵',
                        image: '/thumbnail/ghostTN.png',
                        url: "/ghostStart",
                    },
                    {
                        id: 14,
                        name: '냥냥 월드컵',
                        image: '/thumbnail/catTN.png',
                        url: "/catStart",
                    },
                    {
                        id: 15,
                        name: '영화 테스트',
                        image: '/thumbnail/movie.jpg',
                        url: "/movieStart",
                    }
                ]
            };
        },
        methods:{ 
            showList(){
                var resturnList = [];
                for(var i=0; i<this.tests.length; i++){
                    if(this.tests[i].name.indexOf(this.keyword) > -1){
                        resturnList.push(this.tests[i]);
                    }
                }
    
                return resturnList;
            },
        }
    }
    </script>
    
<style scoped>
    li img{
        width:150px;
        height:150px;
        border:1px solid black;
    }
    li:hover{
        transform: scale(1.1);
    }
    input{
        width:700px;
        border:1px solid black
    }
    .main{
        width:500px;
    }
    ul{
        width:600px;
    }
    p{
        font-size:20px;
        position: relative;
    }
</style>