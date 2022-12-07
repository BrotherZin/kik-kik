<template>
    <div class="search">
      <input type="text" id="searchInput">
        <button id="searchBtn">{{search}}</button>
            <ul :src="tests.image" id="list">
                {{tests}}
            </ul>
    </div>
    </template>

<script>
export default {
    data(){
    return{
        id:"",
        name:"",
        tests:[
    {
        id: 1,
        name: '쩝쩝박사 테스트',
        url: '/thumbnail/foodtest.png'
    },
    {
        id: 2,
        name: '사이코패스 테스트',
        url: '/image/psycho/main.png'
    },
    {
        id: 3,
        name: '여자 아이돌 테스트',
        url: '/thumbnail/girlsidealTN.png'
    },
    {
        id: 4,
        name: '롤창 테스트',
        url: '/image/lol/kda.png'
    }
            ]
        };
    },
    methods:{ 
        showList(val){
            list.innerHTML = '';
            const res = tests.forEach(test => {
                if(test.name.toLowerCase().includes(val.toLowerCase())){
                    list.innerHTML += `
                    <li class="test1" @click="foodtest">
                        <img class="image1" src="${test.url}" />
                        ${test.name}
                    </li>
                    <li class="test1" @click="psychotest">
                        <img class="image1" src="${test.url}" />
                        ${test.name}
                    </li>
                    <li class="test1" @click="girlsideal">
                        <img class="image1" src="${test.url}" />
                        ${test.name}
                    </li>
                    <li class="test1" @click="Lolchango">
                        <img class="image1" src="${test.url}" />
                        ${test.name}
                    </li>
                    `;
                }
            });
        },
        search(){
            const input = document.getElementById('searchInput');
            const btn = document.getElementById('searchBtn');
            btn.addEventListener('click', () => {
                showList(input.value);
            });
            input.addEventListener('keyup', (e) => {
                if(e){
                    showList(input.value);
                }
            });
        }
    }
}
</script>

<style>

</style>