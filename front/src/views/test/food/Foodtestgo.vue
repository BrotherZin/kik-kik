<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <div class="text">
          <h1>무슨음식일까요?</h1>
        </div>
      </v-layout>

      <div v-if="number === 1">
      <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="/image/food/tteokbokki.jpg" class="image">
        </div>
        </v-layout>
        <v-layout align-center justify-center>
        <div class = "answer">
          <v-radio-group v-model="answers">
         <label><input type="radio" v-model="food" :value="2"> 떡꼬치 </label><br/>
         <label><input type="radio" v-model="food" :value="1" > 떡볶이 </label><br/>
         <label><input type="radio" v-model="food" :value="3"> 소떡소떡 </label><br/>
         <label><input type="radio" v-model="food" :value="4"> 떡강정 </label><br/>
        </v-radio-group>
      </div>
    </v-layout>
         <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
         
  
  <div class="button">
  <v-btn class="previous" style="background-color: #c74eff" @click="prevpage">이전</v-btn>
  <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
  </div>
  </div>

  <div v-if="number === 2">
      <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="/image/food/dakbal.jpg" class="image">
        </div>
        </v-layout>
        <v-layout align-center justify-center>
        <div class = "answer">
          <v-radio-group v-model="answers">
         <label><input type="radio" v-model="food" :value="4"> 닭근위볶음 </label><br/>
         <label><input type="radio" v-model="food" :value="3"> 닭도리탕 </label><br/>
         <label><input type="radio" v-model="food" :value="2"> 염통볶음 </label><br/>
         <label><input type="radio" v-model="food" :value="1"> 닭발 </label><br/>
        </v-radio-group>
      </div>
    </v-layout>
         <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
  
  <div class="button">
  <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
  <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
  </div>
  </div>


  <div v-if="number === 3">
      <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="/image/food/pizza.jpg" class="image">
        </div>
        </v-layout>
        <v-layout align-center justify-center>
        <div class = "answer">
          <v-radio-group v-model="answers">
         <label><input type="radio" v-model="food" :value="1"> 피자 </label><br/>
         <label><input type="radio" v-model="food" :value="2"> 파스타 </label><br/>
         <label><input type="radio" v-model="food" :value="3"> 샐러드 </label><br/>
         <label><input type="radio" v-model="food" :value="4"> 뇨끼 </label><br/>  
        </v-radio-group>
      </div>
    </v-layout>
         <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
  
  <div class="button">
  <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
  <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
  </div>
  </div>


  <div v-if="number === 4">
      <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="/image/food/doenjangstew.png" class="image">
        </div>
        </v-layout>
        <v-layout align-center justify-center>
        <div class = "answer">
          <v-radio-group v-model="answers">
         <label><input type="radio" v-model="food" :value="4"> 차돌박이 숙주볶음 </label><br/>
         <label><input type="radio" v-model="food" :value="3"> 순두부찌개 </label><br/>
         <label><input type="radio" v-model="food" :value="1"> 된장찌개 </label><br/>
         <label><input type="radio" v-model="food" :value="2"> 스키야끼 </label><br/> 
        </v-radio-group>
      </div>
    </v-layout>
         <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
  
  <div class="button">
  <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
  <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
  </div>
  </div>

  <div v-if="number === 5">
      <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="/image/food/jokbal.jpg" class="image">
        </div>
        </v-layout>
        <v-layout align-center justify-center>
        <div class = "answer">
          <v-radio-group v-model="answers">
         <label><input type="radio" v-model="food" :value="1"> 족발 </label><br/>
         <label><input type="radio" v-model="food" :value="2"> 돼지껍데기 </label><br/>
         <label><input type="radio" v-model="food" :value="3"> 수육 </label><br/>
         <label><input type="radio" v-model="food" :value="4"> 돈피묵 </label><br/>   
          </v-radio-group>
        </div>
    </v-layout>
         <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
  
  <div class="button">
  <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
  <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
  </div>
  </div>


  <div v-if="number === 6">
      <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="/image/food/gyeranmari.jpg" class="image">
        </div>
        </v-layout>
        <v-layout align-center justify-center>
        <div class = "answer">
          <v-radio-group v-model="answers">
         <label><input type="radio" v-model="food" :value="2"> 토마토달걀볶음 </label><br/>
         <label><input type="radio" v-model="food" :value="3"> 스크램블 에그 </label><br/>
         <label><input type="radio" v-model="food" :value="1"> 계란말이 </label><br/>
         <label><input type="radio" v-model="food" :value="4"> 계란찜 </label><br/>  
        </v-radio-group>
      </div>
    </v-layout>
         <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
  
  <div class="button">
  <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
  <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
  </div>
  </div>


  <div v-if="number === 7">
      <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="/image/food/porkcutlet.jpg" class="image">
        </div>
        </v-layout>
        <v-layout align-center justify-center>
        <div class = "answer">
          <v-radio-group v-model="answers">
         <label><input type="radio" v-model="food" :value="2"> 새우튀김 </label><br/>
         <label><input type="radio" v-model="food" :value="1" > 돈까스 </label><br/>
         <label><input type="radio" v-model="food" :value="3"> 치킨까스 </label><br/>
         <label><input type="radio" v-model="food" :value="4"> 치즈돈까스 </label><br/>
        </v-radio-group>
      </div>
    </v-layout>
         <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
  
  <div class="button">
  <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
  <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
  </div>
  </div>


  <div v-if="number === 8">
      <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="/image/food/hamburger.jpg" class="image">
        </div>
        </v-layout>
        <v-layout align-center justify-center>
        <div class = "answer">
          <v-radio-group v-model="answers">
         <label><input type="radio" v-model="food" :value="2"> 반미 </label><br/>
         <label><input type="radio" v-model="food" :value="3"> 샐러드 </label><br/>
         <label><input type="radio" v-model="food" :value="4"> 샌드위치 </label><br/>
         <label><input type="radio" v-model="food" :value="1"> 햄버거 </label><br/>
          </v-radio-group>
        </div>
    </v-layout>
         <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
  
  <div class="button">
  <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
  <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
  </div>
  </div>


  <div v-if="number === 9">
      <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="/image/food/kimchibap.jpg" class="image">
        </div>
        </v-layout>
        <v-layout align-center justify-center>
        <div class = "answer">
          <v-radio-group v-model="answers">
         <label><input type="radio" v-model="food" :value="1"> 김치볶음밥 </label><br/>
         <label><input type="radio" v-model="food" :value="2"> 리조또 </label><br/>
         <label><input type="radio" v-model="food" :value="3"> 제육볶음 </label><br/>
         <label><input type="radio" v-model="food" :value="4"> 카오팟무쌉(태국식 돼지고기 덮밥) </label><br/>
        </v-radio-group>
      </div>
    </v-layout>
         <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
  
  <div class="button">
  <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
  <v-btn class="next" style="background-color: #c74eff" @click="nextpage(), ok()">다음</v-btn>
  </div>
  </div>

  <div v-if="number === 10">
      <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="/image/food/samgyeopsal.jpg" class="image">
        </div>
        </v-layout>
        <v-layout align-center justify-center>
        <div class = "answer">
          <v-radio-group v-model="answers">
         <label><input type="radio" v-model="food" :value="3"> 오겹살 </label><br/>
         <label><input type="radio" v-model="food" :value="4"> 갈매기살 </label><br/>
         <label><input type="radio" v-model="food" :value="1"> 삼겹살 </label><br/>
         <label><input type="radio" v-model="food" :value="2"> 항정살 </label><br/>   
        </v-radio-group>
      </div>
    </v-layout>
         <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
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
      food:"",
    };
  },
  methods:{
    prevpage() { //첫 화면에서의 이전 버튼
     window.alert("첫번째 페이지입니다(｡•́ _ •̀｡)");
    },
    // nextpage() {
    //   if(this.food == ""){
    //     window.alert("음식을 선택해주세요!!๑•‿•๑")
    //   }//음식을 선택하지 않았을 때
    //   else{
    //   this.number++;
    //   }  
    //   console.log(this.food);
    // },
    nextpage() {
      var food = Number(this.food);
      console.log(food,this.food,this.number);
      if (this.food == ""){
        return window.alert("음식을 선택해주세요!!๑•‿•๑")
      }
      if (this.food == 1) {
        this.answer++;
      }
      this.number++;
      
    },
    previous(){ //이전 버튼
      this.number--;
      //this.food = "";
    },
    ok() {
      this.food = "";
    },
    result(){ //결과보기 버튼
      this.tester = this.$route.query.tester;
      if (this.answers == 1) {
        this.answer++;
        this.$router.push(
          "/Foodresult?tester=" + this.tester + "&answer=" + this.answer
        );
      } else {
        this.$router.push(
          "/Foodresult?tester=" + this.tester + "&answer=" + this.answer
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
height: auto;
max-width: 3000px;
max-height: 3000px;
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