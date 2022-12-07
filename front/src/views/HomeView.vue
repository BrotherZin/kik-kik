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
              if(e.keyCode === 13){
                  showList(input.value);
              }
          });
      }
  }
}
</script>

<style>

</style>

  <style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
 *{font-family: 'Jua', sans-serif;}

.background {
  height: 100%;
  background-color: #e6e6fa;
  display: grid;
}
.logo2 {
  margin-left: 300px;
  width: 500px;
  height: 100px;
}
.inside {
  background-color: white;
  width: 1200px;
  height: 750px;
  margin-top: 50px;
  border-radius: 100px 100px 100px 100px;
}
.text {
  width: 700px;
}
ul{
  list-style-type: none;
}
.test1 {
  display: inline-block;
  margin: auto;
  text-align: center;
  margin-right: 35px;
  font-size: 21px;
}
.test1:hover {
  transform: scale(1.1);
}
.image1 {
  margin-bottom: 5px;
  display: block;
  width: 135px;
  height: 140px;
  border: solid 1px black;
}
.font {
  margin-top: 50px;
  margin-bottom: 40px;
}
#start {
  margin-top: 30px;
  width: 400px;
  font-size: 35px;
}
</style>
  
