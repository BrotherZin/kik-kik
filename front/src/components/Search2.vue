<template>
  <div class="search">
    <input
      v-model="keyword"
      type="text"
      id="searchInput"
      placeholder="플레이 하고 싶은 테스트를 검색 후 클릭해보세요 !"
    />
    <div id="test" v-show="keyword">
      {{ keyword }}
    </div>

    <div>
      <div
        class="search-item"
        v-show="keyword"
        v-for="(test, key) in showList()"
        :key="key"
      >
        <router-link :to="test.url">
          <img :src="test.image" :alt="test.name" />
        </router-link>
        <!-- <img :src="test.image" :alt="test.name" @click="Movetest" /> -->
        <p>{{ test.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      name: "",
      keyword: "",
      tests: [
        {
          id: 1,
          name: "쩝쩝박사 테스트",
          image: "/thumbnail/foodtest.png",
          url: "/foodtest",
        },
        {
          id: 2,
          name: "사이코패스 테스트",
          image: "/thumbnail/main.png",
          url: "/psychotest",
        },
        {
          id: 3,
          name: "여자 가수 테스트",
          image: "/thumbnail/girlsidealTN.png",
          url: "/girlsidealtypeStart",
        },
        {
          id: 4,
          name: "롤창 테스트",
          image: "/image/lol/kda.png",
          url: "/lolchang",
        },
        {
          id: 5,
          name: "롤 흑우력 테스트",
          image: "/thumbnail/box.png",
          url: "/Lolskin",
        },
        {
          id: 6,
          name: "남자 가수 월드컵",
          image: "/thumbnail/mansidealTN.png",
          url: "/mansidealtypeStart",
        },
        {
          id: 7,
          name: "라면 월드컵",
          image: "/thumbnail/ramenTN.png",
          url: "/ramenStart",
        },
        {
          id: 8,
          name: "냥냥 월드컵",
          image: "/thumbnail/catTN.png",
          url: "/catStart",
        },
        {
          id: 9,
          name: "우울증 테스트",
          image: "/thumbnail/main2.png",
          url: "/Dtest",
        },
        {
          id: 10,
          name: "남자 배우 월드컵",
          image: "/thumbnail/manactorTN.png",
          url: "/manactorStart",
        },
        {
          id: 11,
          name: "치어리더 월드컵",
          image: "/thumbnail/cheerTN.png",
          url: "/cheerStart",
        },

        {
          id: 12,
          name: "여자 배우 월드컵",
          image: "/thumbnail/girlActorTN.png",
          url: "/girlactorStart",
        },
        {
          id: 13,
          name: "추억의게임 월드컵",
          image: "/thumbnail/gameTN.jpg",
          url: "/gameStart",
        },
        {
          id: 14,
          name: "호러 귀신 월드컵",
          image: "/thumbnail/ghostTN.png",
          url: "/ghostStart",
        },
        {
          id: 15,
          name: "영화 테스트",
          image: "/thumbnail/movie.jpg",
          url: "/movietest",
        },
      ],
    };
  },
  methods: {
    showList() {
      var resturnList = [];
      for (var i = 0; i < this.tests.length; i++) {
        if (this.tests[i].name.indexOf(this.keyword) > -1) {
          resturnList.push(this.tests[i]);
        }
      }

      return resturnList;
    },
  },
};
</script>

<style scoped>
.search-item img {
  width: 150px;
  height: 150px;
}
.search input:focus {
  border-color: #009dffc9;
  outline: rgb(0, 0, 0);
}
input[type="text"] {
  appearance: none;
  border-radius: 4px;
  height: 50px;
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  font-size: 16px;
  line-height: 1.5;
  color: #212121;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s ease-in-out;
  margin-bottom: 16px;
}
.search-item {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
}
.search-item:hover{
  transform: scale(1.1);
}
</style>