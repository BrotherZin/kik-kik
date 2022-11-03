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
          <label><input type="checkbox" v-model="food" value="tteogkkochi"> 떡꼬치 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="tteogbokki"> 떡볶이 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="sotteogsotteog"> 소떡소떡 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="tteoggangjeong"> 떡강정 </label><br/>
           <br>   
           <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="$router.push('/foodtest')">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage">다음</v-btn>
    </div>
    </div>
</v-layout>
    </div>

    <div v-if="number === 2">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/food/dakbal.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
          <label><input type="checkbox" v-model="food" value="dalg-geun-wibokk-eum"> 닭근위볶음 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="dalgdolitang"> 닭도리탕 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="yeomtong"> 염통볶음 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="dakbal"> 닭발 </label><br/>
           <br>   
           <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage">다음</v-btn>
    </div>
    </div>
</v-layout>
    </div>

    <div v-if="number === 3">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/food/pizza.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
          <label><input type="checkbox" v-model="food" value="pizza"> 피자 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="pasta"> 파스타 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="salad"> 샐러드 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="nyokki"> 뇨끼 </label><br/>
           <br>   
           <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage">다음</v-btn>
    </div>
    </div>
</v-layout>
    </div>

    <div v-if="number === 4">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/food/doenjangstew.png" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
          <label><input type="checkbox" v-model="food" value="chadolbag-i sugjubokk-eum"> 차돌박이 숙주볶음 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="sundubujjigae"> 순두부찌개 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="doenjangstew"> 된장찌개 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="seukiyaki"> 스키야끼 </label><br/>
           <br>   
           <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage">다음</v-btn>
    </div>
    </div>
</v-layout>
    </div>

    <div v-if="number === 5">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/food/jokbal.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
          <label><input type="checkbox" v-model="food" value="jokbal"> 족발 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="pigskin"> 돼지껍데기 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="suyug"> 수육 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="donpimug"> 돈피묵 </label><br/>
           <br>   
           <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage">다음</v-btn>
    </div>
    </div>
</v-layout>
    </div>

    <div v-if="number === 6">
        <v-layout align-center justify-center>
            <div style="display: block; margin: auto; width: auto; height: auto">
            <img src="/image/food/gyeranmari.jpg" class="image">
          </div>
          </v-layout>
          <v-layout align-center justify-center>
          <div class = "answer">
          <label><input type="checkbox" v-model="food" value="Tomato Egg Stir-fry"> 토마토달걀볶음 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="scrambled eggs"> 스크램블 에그 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="gyeranmari"> 계란말이 </label><br/>
           <br>
           <label><input type="checkbox" v-model="food" value="gyelanjjim"> 계란찜 </label><br/>
           <br>   
           <!-- <h>선택한 음식</h><p>{{ food }}</p>           -->
    
    <div class="button">
    <v-btn class="previous" style="background-color: #c74eff" @click="previous">이전</v-btn>
    <v-btn class="next" style="background-color: #c74eff" @click="nextpage">다음</v-btn>
    </div>
    </div>
</v-layout>
    </div>

  </div>
    </v-layout>
  </template>


  <script>
  export default {
    data(){
      return{
        answer: 0,
        number: 1,
        food : [],
      }
    },

    methods: {
      nextpage(){
      var answer=Number(this.answers)
      if(this.answers==1){ 
          this.number++;
          this.answer++;
        }
        else{
          this.number++;

      }
    },
    previous() {
      this.number--;
    },

      answer(keyword) {
        this.$router.push("/");
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
    height: 750px;
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
    width:500px;
    font-size:20px;
    font-weight:bold;
  }
  .button{
    padding-left:200px;
  
  }
  .text{
    padding-top:20px;
  }
  </style>
      