<template>
    <v-layout class="background">
        <div class="psychopage">
          <div class="title-page">
            <div class="psychopage-index">
              <span v-bind:style="{fontSize:'30px', fontWeight:'bold' }" >상식 테스트</span>
            </div>
            <div class="psychopage-img">
              <img src="/image/sangsig/Q.png">
            </div>
          </div>
          <div class="backimg">
  
                                  <div v-if="number === 1">
                                        <div class="psycho-area" style="background-image:url(/image/sangsig/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>홍길동전의 저자는?</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="허균" :value="1"></v-radio>
                                                    <v-radio label="허난설헌" :value="2"></v-radio>
                                                    <v-radio label="허삼관" :value="3"></v-radio>
                                                  </v-radio-group>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="psycho-prevnext">
                                            <div class="psyprev">
                                              <button href="#" style="color:black;" @click="$router.push('/PsychoTest')">◀ 돌아가기</button>
                                            </div>
                                            <div class="psynext">
                                              <button href="#" style="color:black;" @click="next() ,nan()">다음 ▶</button>
                                            </div>
                                        </div>
                                    </div>
  
  
  
  
                                    <div v-else-if="number === 2">
                                        <div class="psycho-area" style="background-image:url(/image/sangsig/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>공휴일이 아닌 날은?</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="제헌절" :value="1"></v-radio>
                                                    <v-radio label="한글날" :value="2"></v-radio>
                                                    <v-radio label="개천절" :value="3"></v-radio>
                                                  </v-radio-group>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="psycho-prevnext">
                                            <div class="psyprev">
                                              <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                            </div>
                                            <div class="psynext">
                                              <button href="#" style="color:black;" @click="next() ,nan()">다음 ▶</button>
                                            </div>
                                        </div>
                                    </div>
  
  
  
  
                                    <div v-else-if="number === 3">
                                        <div class="psycho-area" style="background-image:url(/image/sangsig/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>미각에 포함되지 않는 맛은?</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="신맛" :value="2"></v-radio>
                                                    <v-radio label="매운맛" :value="1"></v-radio>
                                                    <v-radio label="쓴맛" :value="3"></v-radio>
                                                  </v-radio-group>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="psycho-prevnext">
                                            <div class="psyprev">
                                              <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                            </div>
                                            <div class="psynext">
                                              <button href="#" style="color:black;" @click="next() ,nan()">다음 ▶</button>
                                            </div>
                                        </div>
                                    </div>
  
  
  
  
                                    <div v-else-if="number === 4">
                                        <div class="psycho-area" style="background-image:url(/image/sangsig/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>점심의 뜻은?</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="마음에 점을 찍듯이 먹음" :value="1"></v-radio>
                                                    <v-radio label="점점 배불리 먹음" :value="2"></v-radio>
                                                    <v-radio label="점점 반찬수를 늘려서 먹음" :value="3"></v-radio>
                                                  </v-radio-group>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="psycho-prevnext">
                                            <div class="psyprev">
                                              <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                            </div>
                                            <div class="psynext">
                                              <button href="#" style="color:black;" @click="next() ,nan()">다음 ▶</button>
                                            </div>
                                        </div>
                                    </div>
  
  
  
  
                                    <div v-else-if="number === 5">
                                        <div class="psycho-area" style="background-image:url(/image/sangsig/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>10리(십리)를 킬로미터로 환산하면?</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="1km" :value="3"></v-radio>
                                                    <v-radio label="7km" :value="2"></v-radio>
                                                    <v-radio label="4km" :value="1"></v-radio>
                                                  </v-radio-group>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="psycho-prevnext">
                                            <div class="psyprev">
                                              <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                            </div>
                                            <div class="psynext">
                                              <button href="#" style="color:black;" @click="next() ,nan()">다음 ▶</button>
                                            </div>
                                        </div>
                                    </div>
  
  
  
  
                                    <div v-else-if="number === 6">
                                        <div class="psycho-area" style="background-image:url(/image/sangsig/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>스승의 날은 어떤 인물의 생일에서 유래된 것인가?</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="김구" :value="3"></v-radio>
                                                    <v-radio label="신사임당" :value="2"></v-radio>
                                                    <v-radio label="세종대왕" :value="1"></v-radio>
                                                  </v-radio-group>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="psycho-prevnext">
                                            <div class="psyprev">
                                              <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                            </div>
                                            <div class="psynext">
                                              <button href="#" style="color:black;" @click="next() ,nan()">다음 ▶</button>
                                            </div>
                                        </div>
                                    </div>
  
  
  
  
                                    <div v-else-if="number === 7">
                                        <div class="psycho-area" style="background-image:url(/image/sangsig/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>우리나라에 최초로 발명된 것은?</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="전기밥솥" :value="2"></v-radio>
                                                    <v-radio label="MP3플레이어" :value="1"></v-radio>
                                                    <v-radio label="신호등" :value="3"></v-radio>
                                                  </v-radio-group>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="psycho-prevnext">
                                            <div class="psyprev">
                                              <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                            </div>
                                            <div class="psynext">
                                              <button href="#" style="color:black;" @click="next() ,nan()">다음 ▶</button>
                                            </div>
                                        </div>
                                    </div>
  
  
  
  
                                    <div v-else-if="number === 8">
                                        <div class="psycho-area" style="background-image:url(/image/sangsig/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>여러 번을 강조할 때 '골백번'이란 말을 하는데 골백번이 뜻하는 수는?</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="1,000" :value="3"></v-radio>
                                                    <v-radio label="10,000" :value="1"></v-radio>
                                                    <v-radio label="100,000" :value="2"></v-radio>
                                                  </v-radio-group>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="psycho-prevnext">
                                            <div class="psyprev">
                                              <button href="#" style="color:black;" @click="$router.push('/PsychoTest')">◀ 이전</button>
                                            </div>
                                            <div class="psynext">
                                              <button href="#" style="color:black;" @click="next() ,nan()">다음 ▶</button>
                                            </div>
                                        </div>
                                    </div>
  
  
  
  
                                    <div v-else-if="number === 9">
                                        <div class="psycho-area" style="background-image:url(/image/sangsig/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>우리나라에서 첫번째로 지정된 국립공원은?</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="설악산" :value="3"></v-radio>
                                                    <v-radio label="한라산" :value="2"></v-radio>
                                                    <v-radio label="지리산" :value="1"></v-radio>
                                                  </v-radio-group>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="psycho-prevnext">
                                            <div class="psyprev">
                                              <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                            </div>
                                            <div class="psynext">
                                              <button href="#" style="color:black;" @click="next() ,nan()">다음 ▶</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-else-if="(number === 10)">
                                        <div class="psycho-area" style="background-image:url(/image/sangsig/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>15. 별 다른 노력을 하지 않았는데도 체중이 늘거나 줄었다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="나비" :value="3"></v-radio>
                                                    <v-radio label="장수풍뎅이" :value="2"></v-radio>
                                                    <v-radio label="매미" :value="1"></v-radio>
                                                  </v-radio-group>
                                                </div>
                                            </div>
                                        </div>

                                        

                                        
                                        
                                        <div class="psycho-prevnext">
                                            <div class="psyprev">
                                              <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                            </div>
                                            <div class="psynext">
                                              <button href="#" style="color:black;" @click="finish">다음 ▶</button>
                                            </div>
                                        </div>
                                    </div>
                                    
  
  
  
                                    
  
          </div>
    </div>
    </v-layout>
  </template>
  
  
  <script>
  export default{
    data(){
        return {
          answer:0 ,
          number: 1,
          answers:'',
        }
    },  
    methods:{
      next(){
        var answer=Number(this.answers)
        console.log(answer)
        if(this.answers==1){ 
            this.number++;
            this.answer++;
          }
          else{
            this.number++;
        }
      },
      prev() {
        this.number--;
      },
      nan() {
        this.answers='';
      },
      finish() {
        this.tester=this.$route.query.tester
        if(this.answers==1){ 
        this.answer++;
        this.$router.push('/ssF?tester='+this.tester+'&answer='+this.answer);
      }
        else {
          this.$router.push('/ssF?tester='+this.tester+'&answer='+this.answer);
        }
    }
    }
  }
  </script>
  
  <style scoped lang="less">
  
  p{
    font-size: 20px;
  }
  
  .background {
    background-color:  #E6E6FA;
  }
  
  .title {
    font-size:30px;
    font-weight:bold;
  }
  
  .title-page{
    text-align: center;
  }
  .psychopage {
    margin: auto;
    text-align: center;
    background-color: white;
    width: 1400px;
    height: 1050px;
  }
  
  .psychopage-title {
    font-size: 10px;
    margin-bottom: 20px;
  }
  
  .psychopage-index {
    padding : 30px;
  }
  
  .psychopage-img img {
    z-index: 1;
    width: 300px;
    height: 300px;
    margin-bottom: 50px;
  }
  .psycho-content{
    height:100px;
    padding: 10px;
    text-align: center;
  }
  
  .psycho-area {
    width: 400px;
    width: 400px;
    height: 500px;
    /*background-image:url("/image/test/backimg.png");*/
    background-size: cover;
    margin: auto;
    font-weight:bold;
  }
  .backimg {
    margin: auto;
  
  }
  .psycho-selectarea {
    text-align: left;
    font-size: 20px;
  }
  
  input[type=radio] {
    border: 0px;
    width: 20px;
    height: 20px;
    margin-left: 10%;
    
  }
  .psycho-radio {
    
    font-size: 20px;
    padding-left:30px;
  }
  
  .psycho-prevnext {
    margin: auto;
    width: 400px;
    display: flex;
    justify-content: space-around;
    padding: 20px;
    font-size: 20px;
  }
  .psyprev {
    text-align: left;
    margin-left: -30%;
  }
  .psynext {
    text-align: right;
    margin-right: -30%;
  }
  
  a:link {
    color : black;
    text-decoration: none;
    font-weight:bold;
  
  }
  a:visited {
    color : black;
    text-decoration: none;
    font-weight:bold;
  }
  
  a:hover {
    color : black;
    text-decoration: underline;
    font-weight:bold;
  }
  a:active {
    color : black;
    text-decoration: none;
    font-weight:bold;
  }
  
  
  </style>