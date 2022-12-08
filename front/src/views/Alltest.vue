<template>
  <v-layout class="background" align-center justify-center>
    <div>
      <v-layout class="inside" fill-height align-center justify-center>
        <div class="text" style="text-align: center">
          <div class="font" style="text-align: left">
            <search3></search3>
          </div>
        </div>
      </v-layout>
    </div>
  </v-layout>
</template>
  
  <script>
import HelloWorld from "../components/HelloWorld";
import Search3 from "@/components/Search3"
export default {
  name: "Home",
  components: {
        Search3
      },
data() {
    return {
      id:"",
      name:"",
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
  },
  {
      id: 5,
      name: '롤 흑우력 테스트',
      image: '/thumbnail/box.png'
  },
  {
      id: 6,
      name: '남돌 월드컵',
      image: '/thumbnail/mansidealTN.png'
  },
  {
      id: 7,
      name: '라면 월드컵',
      image: '/thumbnail/ramenTN.png'
  },
  {
      id: 8,
      name: '우울증 테스트',
      image: '/image/dep/main.png'
  },
  {
      id: 9,
      name: '남자 배우 월드컵',
      image: '/thumbnail/manActorTN.png'
  },
  {
      id: 10,
      name: '치어리더 월드컵',
      image: '/thumbnail/cheerTN.png'
  },
  {
      id: 11,
      name: '여자 배우 월드컵',
      image: '/thumbnail/girlActorTN.png'
  },
  {
      id: 12,
      name: '추억게임 월드컵',
      image: '/thumbnail/gameTN.jpg'
  },
  {
      id: 13,
      name: '호러 귀신 월드컵',
      image: '/thumbnail/ghostTN.png'
  },
  {
      id: 14,
      name: '냥냥 월드컵',
      image: '/thumbnail/catTN.png'
  },
  {
      id: 15,
      name: '영화 테스트',
      image: '/thumbnail/movie.jpg'
  }
]
    };
  },
  methods: {
    testStart() {
      this.$router.push("/alltest");
    },
    foodtest() {
      this.$router.push("/foodtest");
    },
    psychotest() {
      this.$router.push("/psychotest");
    },
    girlsideal() {
      this.$router.push("/girlsidealtypeStart");
    },
    mansideal() {
      this.$router.push("/mansidealtypeStart");
    },
    ramenTest() {
      this.$router.push("/ramenStart");
    },
    Lolchango() {
      this.$router.push("/Lolchang");
    },
    components: {
      HelloWorld,
    },
  },
};
</script>
  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
* {
  font-family: "Jua", sans-serif;
}
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
.search2{
  border:1px solid black
}
</style>