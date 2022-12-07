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