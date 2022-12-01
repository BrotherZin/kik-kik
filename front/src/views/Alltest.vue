<template>
  <v-layout class="background" align-center justify-center>
    <div>
      <v-layout class="inside" fill-height align-center justify-center>
        <div class="text" style="text-align: center">
          <div>
          <v-select
            :items="searchoption"
            v-model="searchoptionselected"
            :style="{ width: '140px' }"/>
          <v-text-field
            class="field"
            v-model="searchkeyword"
            dense
            outlined
            label="원하는 테스트의 키워드를 검색해보세요!"
            @keyup.enter="searchresult()"
            ></v-text-field>
          {{ keyword }}
        </div>
          
          <div class="test1" @click="foodtest">
          <img class="image1" src="/thumbnail/foodtest.png" />
          쩝쩝박사 테스트
        </div>
        
        <div class="test1"  @click="psychotest">
          <img class="image1" src="/image/psycho/main.png"/>
          사이코패스 테스트
        </div>

        <div class="test1" @click="girlsideal">
          <img class="image1" src="/thumbnail/girlsidealTN.png"/>
           여자이상형 월드컵
        </div>

        <div class="test1" @click="Lolchango">
          <img class="image1" src="/image/lol/kda.png"/>
          롤창 테스트
        </div>
        <div class="test1" @click="Lolskin">
          <img class="image1" src="/thumbnail/box.png" />
          롤 흑우력 테스트
        </div>
        
        <div class="test1"  @click="mansideal">
          <img class="image1" src="/thumbnail/mansidealTN.png"/>
          남자이상형 월드컵
        </div>

        <div class="test1" @click="ramenTest">
          <img class="image1" src="/thumbnail/ramenTN.png"/>
           라면 월드컵
        </div>

        <div class="test1" @click="Dtest">
          <img class="image1" src="/image/dep/main.png"/>
          우울증 테스트
        </div>

        <div class="test1" @click="movietest">
          <img class="image1" src="/thumbnail/movie.jpg"/>
          영화 테스트
        </div>
        <v-row v-if="searchfinish===true">
          <v-col v-for="item in searchresult" :key="item.id">
            <v-card>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>{{ item.content }}</v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="testStart(item.id)">
                  테스트 시작하기
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        </div>
      </v-layout>
    </div>
  </v-layout>
</template>
      
      <script>
import HelloWorld from "../components/HelloWorld";
export default {
  name: "Home",
  data(){
    return{
      searchkeyword: '',//검색어
      keyword: '',
      searchoption: ['테스트 제목', '테스트 설명', '테스트 키워드'],//검색옵션
      searchoptionselected: '테스트 제목',//검색옵션 선택
      searchfinish: false,//검색완료
    }
  },
  methods: {
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
    Lolchango() {
      this.$router.push("/Lolchang");
    },
    Lolskin() {
      this.$router.push("/Lolskin");
    },
    ramenTest() {
      this.$router.push("/ramenStart");
    },
    Dtest(){
      this.$router.push("/Dtest");
    },
    movietest(){
      this.$router.push("/movietest");
    },
    searchresult(){
      if(this.searchkeyword == '') {
        alert('키워드가 입력되지 않았습니다!');
      } else {
        axios({
          url : "http://localhost:8080/search",
          method: "POST",
          data: {
            searchkeyword: this.searchkeyword, //검색어
            searchoption: this.searchoptionselected //검색옵션
          },
        }).then(res => {  
          if(res.data == 'no') {
            alert('검색 결과가 없습니다!');
          } else {
            alert('검색 결과 입니다!');
            this.searchkeyword = '';
            this.searchfinish = true;
          }
        }).catch(err => {
          console.log(err);
        })
      }
    },
  },
  components: {
    HelloWorld,
  },
};
</script>
  <style scoped>
.background {
  height: 100%;
  background-color: #e6e6fa;
  display: grid;
}
.logo {
  display: flex;
  margin-right: 100px;
}
.inside {
  background-color: white;
  width: 1200px;
  height: 750px;
  border-radius: 100px 100px 100px 100px;
}
.text {
  width: 700px;
}
.font {
  margin-top: 50px;
  margin-bottom: 40px;
}
.test1{
  display: inline-block;
  margin-top: 20px;
  text-align: center;
  margin-right: 35px;
  font-weight: bold;
}
.test1:hover{
  transform: scale(1.1);
}
.image1 {
  margin-bottom: 5px;
  display:block;
  width: 135px;
  height: 140px;
  border: solid 1px black;
}
.box{
  height: 500px;
}
.v-text-field {
  padding: 0px;
  border: none;
}

</style>