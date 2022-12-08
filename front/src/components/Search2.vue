<template>
<div class="search">
    <input v-model="keyword" type="text" id="searchInput">
    {{keyword}}
        <div>
            <ul>
            <li v-for="(test,key) in showList()" :key="key">
                <img :src='test.image' :alt='test.name'>
                <p>{{test.name}}</p>
            </li>
        </ul>
        </div>
        
</div>
</template>

<script>
export default {
    data(){
    return{
        id:"",
        name:"",
        keyword:"",
        tests:[
                {
                    id: 1,
                    name: '쩝쩝박사 테스트2',
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
    }
</style>