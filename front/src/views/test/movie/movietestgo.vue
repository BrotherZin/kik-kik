<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div class="text">
            <h1>영화 포스터를 보고 맞춰볼까요?</h1>
          </div>
        </v-layout>
  
        <div v-if="number === 1">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/movie/movie1.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
            <v-radio-group v-model="answers">
           <label><input type="radio" v-model="movie" :value="1"> 백두산 </label><br/>
           <label><input type="radio" v-model="movie" :value="2" > 한라산 </label><br/>
           <label><input type="radio" v-model="movie" :value="3"> 관악산 </label><br/>
           <label><input type="radio" v-model="movie" :value="4"> 북한산 </label><br/>
          </v-radio-group>
        </div>
      </v-layout>
    
           
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="prevpage">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
    </div>
    </div>
  
    <div v-if="number === 2">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/movie/movie2.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
            <v-radio-group v-model="answers">
           <label><input type="radio" v-model="movie" :value="4"> 클라이밍 </label><br/>
           <label><input type="radio" v-model="movie" :value="3"> 재난 </label><br/>
           <label><input type="radio" v-model="movie" :value="2"> 지진 </label><br/>
           <label><input type="radio" v-model="movie" :value="1"> 엑시트 </label><br/>
          </v-radio-group>
        </div>
      </v-layout>

    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
    </div>
    </div>
  
  
    <div v-if="number === 3">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/movie/movie3.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
            <v-radio-group v-model="answers">
           <label><input type="radio" v-model="movie" :value="2"> 1993 </label><br/>
           <label><input type="radio" v-model="movie" :value="1"> 1917 </label><br/>
           <label><input type="radio" v-model="movie" :value="3"> 1938 </label><br/>
           <label><input type="radio" v-model="movie" :value="4"> 1976 </label><br/>  
          </v-radio-group>
        </div>
      </v-layout>
           <!-- <h>선택한 영화</h><p>{{ movie }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
    </div>
    </div>
  
  
    <div v-if="number === 4">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/movie/movie4.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
            <v-radio-group v-model="answers">
           <label><input type="radio" v-model="movie" :value="4"> 살인사건 </label><br/>
           <label><input type="radio" v-model="movie" :value="3"> 복수혈전 </label><br/>
           <label><input type="radio" v-model="movie" :value="1"> 악마를보았다 </label><br/>
           <label><input type="radio" v-model="movie" :value="2"> 광기  </label><br/> 
          </v-radio-group>
        </div>
      </v-layout>
           <!-- <h>선택한 영화</h><p>{{ movie }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
    </div>
    </div>
  
    <div v-if="number === 5">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/movie/movie5.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
            <v-radio-group v-model="answers">
           <label><input type="radio" v-model="movie" :value="2"> 미니언즈1 </label><br/>
           <label><input type="radio" v-model="movie" :value="1"> 미니언즈2 </label><br/>
           <label><input type="radio" v-model="movie" :value="3"> 미니언즈3 </label><br/>
           <label><input type="radio" v-model="movie" :value="4"> 미니언즈4 </label><br/>   
            </v-radio-group>
          </div>
      </v-layout>
           <!-- <h>선택한 영화</h><p>{{ movie }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
    </div>
    </div>
  
  
    <div v-if="number === 6">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/movie/movie6.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
            <v-radio-group v-model="answers">
           <label><input type="radio" v-model="movie" :value="2"> 연가시 </label><br/>
           <label><input type="radio" v-model="movie" :value="3"> 여의도 </label><br/>
           <label><input type="radio" v-model="movie" :value="1"> 괴물 </label><br/>
           <label><input type="radio" v-model="movie" :value="4"> 한강 </label><br/>  
          </v-radio-group>
        </div>
      </v-layout>
           <!-- <h>선택한 영화</h><p>{{ movie }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
    </div>
    </div>
  
  
    <div v-if="number === 7">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/movie/movie7.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
            <v-radio-group v-model="answers">
                <label><input type="radio" v-model="movie" :value="2"> 폐교 </label><br/>
           <label><input type="radio" v-model="movie" :value="3"> 폐병원 </label><br/>
           <label><input type="radio" v-model="movie" :value="4"> 정신병원 </label><br/>
           <label><input type="radio" v-model="movie" :value="1"> 곤지암 </label><br/>
          </v-radio-group>
        </div>
      </v-layout>
           <!-- <h>선택한 영화</h><p>{{ movie }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
    </div>
    </div>
  
  
    <div v-if="number === 8">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/movie/movie8.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
            <v-radio-group v-model="answers">
           <label><input type="radio" v-model="movie" :value="2"> 컬러링 </label><br/>
           <label><input type="radio" v-model="movie" :value="1"> 컨저링 </label><br/>
           <label><input type="radio" v-model="movie" :value="3"> 컨설팅 </label><br/>
           <label><input type="radio" v-model="movie" :value="4"> 컨져링 </label><br/>
            </v-radio-group>
          </div>
      </v-layout>
           <!-- <h>선택한 영화</h><p>{{ movie }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
    </div>
    </div>
  
  
    <div v-if="number === 9">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/movie/movie9.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
            <v-radio-group v-model="answers">
           <label><input type="radio" v-model="movie" :value="1"> 자백 </label><br/>
           <label><input type="radio" v-model="movie" :value="2"> 증거 </label><br/>
           <label><input type="radio" v-model="movie" :value="3"> 암흑 </label><br/>
           <label><input type="radio" v-model="movie" :value="4"> 그림자 </label><br/>
          </v-radio-group>
        </div>
      </v-layout>
           <!-- <h>선택한 영화</h><p>{{ movie }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
    </div>
    </div>
  
    <div v-if="number === 10">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/movie/movie10.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
            <v-radio-group v-model="answers">
           <label><input type="radio" v-model="movie" :value="3"> 치킨장사 </label><br/>
           <label><input type="radio" v-model="movie" :value="4"> 잠복근무 </label><br/>
           <label><input type="radio" v-model="movie" :value="1"> 극한직업 </label><br/>
           <label><input type="radio" v-model="movie" :value="2"> 극한수사 </label><br/>   
          </v-radio-group>
        </div>
      </v-layout>
           <!-- <h>선택한 영화</h><p>{{ movie }}</p>           -->
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="result" style="background-color: #c74eff" @click="result(), ok()">결과보기</v-btn>
    </div>
    </div>
  </div>
  </v-layout>
  </template>
  
  
  <script>
  
  export default {
    data(){
      return{
        answer:0,
        number:1,
        answers: "",
        movie:"",
      };
    },
    methods:{
      prevpage() { //첫 화면에서의 이전 버튼
       window.alert("첫번째 페이지입니다(｡•́ _ •̀｡)");
      },
      // nextpage() {
      //   if(this.movie == ""){
      //     window.alert("음식을 선택해주세요!!๑•‿•๑")
      //   }//음식을 선택하지 않았을 때
      //   else{
      //   this.number++;
      //   }  
      //   console.log(this.movie);
      // },
      nextpage() {
        var movie = Number(this.movie);
        console.log(movie);
        if (this.movie == 1) {
          this.answer++;
          this.number++;
        }
        // if (this.movie == ""){
        //   window.alert("음식을 선택해주세요!!๑•‿•๑")
        // }
        else{
          this.number++;
        }
      },
      previous(){ //이전 버튼
        this.number--;
        //this.movie = "";
      },
      ok() {
        this.movie = "";
      },
      result(){ //결과보기 버튼
        this.tester = this.$route.query.tester;
        if (this.answers == 1) {
          this.answer++;
          this.$router.push(
            "/Movieresult?tester=" + this.tester + "&answer=" + this.answer
          );
        } else {
          this.$router.push(
            "/Movieresult?tester=" + this.tester + "&answer=" + this.answer
          );
        }
      },
    },
  };
  </script>
      <style scoped>
  .background {
    height: 100px;
    background-color: #f0f8ff;
    height: 100%;
    background-color: #e6e6fa;
  }
  .inside {
    background-color: white;
    width: 1500px;
    height: 900px;
    margin-top: 50px;
    border-radius: 100px 100px 100px 100px;
  }
  .image {
  margin-top: 30px;
  width: 450px;
  height: 500px;
  padding-bottom: 20px;
  }
  .answer{
    padding-right:300px;
    width:500px;
    font-size:20px;
    font-weight:bold;
  }
  .button{
    padding-left:80px;
  
  }
  .text{
    padding-top:20px;
  }
  .previous{
    margin-right: 40px;
  }
  </style>