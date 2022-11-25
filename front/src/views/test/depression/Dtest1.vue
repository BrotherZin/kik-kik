<template>
    <v-layout class="background">
        <div class="psychopage">
          <div class="title-page">
            <div class="psychopage-index">
              <span v-bind:style="{fontSize:'30px', fontWeight:'bold' }" >우울증 자가진단 테스트</span>
            </div>
            <div class="psychopage-img">
              <img src="/image/dep/cloud.png">
            </div>
          </div>
          <div class="backimg">
  
                                  <div v-if="number === 1">
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>1. 예전보다 일하는 것이 확실히 늦어졌다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>2. 꼭 해야 하는데 하지 못하는 일들이 많아졌다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>3. 무엇인가를 보거나 읽을 때 집중하기가 어렵다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>4. 기쁨과 즐거움이 내 삶에서 사라진 것 같다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>5. 사소한 결정도 내리기가 어렵다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>6. 전에는 참 재미있던 것들에도 더 이상 흥미를 느끼지 못한다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>7. 나는 슬프고 우울하며 불행하다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>8. 요즘 나는 가슴이 휑하니 뚫린 듯 너무 허전하다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>9. 하루 종일 피곤이 가시질 않는다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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

                                    <div v-else-if="number === 10">
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>10. 요즘은 간단한 일조차 하기가 어렵다</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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

                                    <div v-else-if="number === 11">
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>11. 나는 실패자라는 생각이 든다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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

                                    <div v-else-if="number === 12">
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>12. 요즘 수면이 엉망이다(너무 많이 자거나, 너무 적게 잔다. 또는 제대로 자지 못한다.)</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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

                                    <div v-else-if="number === 13">
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>13. 전에는 쉽게 하던 일들이 요즘은 너무 어렵다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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

                                    <div v-else-if="number === 14">
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>14. 좋은 일이 생겨도 기분이 별로 좋지 않다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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
  
  
  
  
                                    <div v-else-if="number === 15">
                                        <div class="psycho-area" style="background-image:url(/image/dep/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>15. 별 다른 노력을 하지 않았는데도 체중이 늘거나 줄었다.</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="2"></v-radio>
                                                    <v-radio label="아니다" :value="1"></v-radio>
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
        this.$router.push('/PsychoTestF?tester='+this.tester+'&answer='+this.answer);
      }
        else {
          this.$router.push('/PsychoTestF?tester='+this.tester+'&answer='+this.answer);
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