<template>
    <v-layout class="background">
        <div class="psychopage">
          <div class="title-page">
            <div class="psychopage-index">
              <span v-bind:style="{fontSize:'30px', fontWeight:'bold' }" >스마트폰 중독 테스트</span>
            </div>
            <div class="psychopage-img">
              <img src="/image/phone/phone.png">
            </div>
          </div>
          <div class="backimg">
  
                                  <div v-if="number === 1">
                                        <div class="psycho-area" style="background-image:url(/image/phone/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>스마트폰을 화장실에 가져간다</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="1"></v-radio>
                                                    <v-radio label="아니다" :value="2"></v-radio>
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

                                    <div v-if="number === 2">
                                        <div class="psycho-area" style="background-image:url(/image/phone/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>하루 2시간 이상 스마트폰을 사용한다</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="1"></v-radio>
                                                    <v-radio label="아니다" :value="2"></v-radio>
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

                                    <div v-if="number === 3">
                                        <div class="psycho-area" style="background-image:url(/image/phone/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>스마트폰을 자주 잃어버리는 편이다</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="1"></v-radio>
                                                    <v-radio label="아니다" :value="2"></v-radio>
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

                                    <div v-if="number === 4">
                                        <div class="psycho-area" style="background-image:url(/image/phone/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>스마트폰의 사용으로 업무 효율이 떨어진다</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="1"></v-radio>
                                                    <v-radio label="아니다" :value="2"></v-radio>
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

                                    <div v-if="(number === 5)">
                                        <div class="psycho-area" style="background-image:url(/image/phone/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>눈을 감고 원하는 단어를 입력할 수 있다</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="1"></v-radio>
                                                    <v-radio label="아니다" :value="2"></v-radio>
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

                                    <div v-if="(number === 6)">
                                        <div class="psycho-area" style="background-image:url(/image/phone/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>손에 스마트폰이 없으면 불안한다</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="1"></v-radio>
                                                    <v-radio label="아니다" :value="2"></v-radio>
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

                                    <div v-if="(number === 7)">
                                        <div class="psycho-area" style="background-image:url(/image/phone/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>취침전까지 스마트폰을 사용한다</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="1"></v-radio>
                                                    <v-radio label="아니다" :value="2"></v-radio>
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

                                    <div v-if="(number === 8)">
                                        <div class="psycho-area" style="background-image:url(/image/phone/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>식사중에도 스마트폰을 사용한다</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="1"></v-radio>
                                                    <v-radio label="아니다" :value="2"></v-radio>
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

                                    <div v-if="number === 9">
                                        <div class="psycho-area" style="background-image:url(/image/phone/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>보행중에 스마트폰을 사용하는 편이다</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="1"></v-radio>
                                                    <v-radio label="아니다" :value="2"></v-radio>
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
  
  
  
  
  
                                    <div v-else-if="(number === 10)">
                                        <div class="psycho-area" style="background-image:url(/image/phone/backimg.png)"> 
                                            <div class="psycho-content">
                                                <p>운전중에 스마트폰을 사용한다</p>
                                            </div>
                                            <div class="psycho-selectarea">
                                                <div class="psycho-radio">
                                                  <v-radio-group v-model="answers">
                                                    <v-radio label="그렇다" :value="1"></v-radio>
                                                    <v-radio label="아니다" :value="2"></v-radio>
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
        this.$router.push('/spFtester='+this.tester+'&answer='+this.answer);
      }
        else {
          this.$router.push('/spF?tester='+this.tester+'&answer='+this.answer);
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