<template>
<div class="search">
  <input type="text" id="searchInput">
    <button id="searchBtn">search</button>
        <ul id="list">
            <!-- <li class="test1" @click="foodtest">
              <img class="image1" src="/thumbnail/foodtest.png" />
          쩝쩝박사 테스트
            </li>

            <li class="test1" @click="psychotest">
              <img class="image1" src="/image/psycho/main.png"/>
          사이코 테스트
            </li>

            <li class="test1" @click="girlsideal">
              <img class="image1" src="/thumbnail/girlsidealTN.png"/>
           아이돌 월드컵
            </li>

            <li class="test1" @click="Lolchango">
              <img class="image1" src="/image/lol/kda.png"/>
          롤창 테스트
            </li> -->
        </ul>
</div>
</template>

<script>
const tests = [
    {
        id: 1,
        name: '쩝쩝박사 테스트',
        type: '쩝쩝',
        url: '/thumbnail/foodtest.png'
    },
    {
        id: 2,
        name: '사이코패스 테스트',
        type: '사이코',
        url: '/image/psycho/main.png'
    },
    {
        id: 3,
        name: '여자 아이돌 테스트',
        type: '여자 아이돌',
        url: '/thumbnail/girlsidealTN.png'
    },
    {
        id: 4,
        name: '롤창 테스트',
        type: '롤',
        url: '/image/lol/kda.png'
    }
]
const list = document.getElementById('list');

function showList(val) {
    list.innerHTML = '';
    const res = tests.forEach(test => {
        if(test.name.includes(val)){
            const li = document.createElement('li');
            li.innerHTML = `
            <img src='${test.url}' alt='${test.name}'>
            <p>이름: ${test.name}</p>
            `
            list.appendChild(li);
        }
    })
}

showList('');

const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const val = searchInput.value;
    console.log(val);
    showList(val);
})
</script>

<style>
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
</style>