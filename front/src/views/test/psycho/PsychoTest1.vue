<template>
  <v-layout class="background">
      <div class="psychopage">
        <div class="title-page">
          <div class="psychopage-index">
            <span v-bind:style="{fontSize:'30px', fontWeight:'bold' }" >사이코패스 테스트</span>
          </div>
          <div class="psychopage-img">
            <img src="/image/psycho/blood.png">
          </div>
        </div>
        <div class="backimg">

                                <div v-if="number === 1">
                                      <div class="psycho-area" style="background-image:url(/image/psycho/backimg.png)"> 
                                          <div class="psycho-content">
                                              <p>당신은 혼자 길을 걸어가고 있습니다. 그때 무엇이 지나갔습니다. 그것의 존재는 무엇이었을까요?  </p>
                                          </div>
                                          <div class="psycho-selectarea">
                                              <div class="psycho-radio">
                                                <v-radio-group v-model="answers">
                                                  <v-radio label="귀신" :value="1"></v-radio>
                                                  <v-radio label="강아지" :value="2"></v-radio>
                                                  <v-radio label="사람" :value="3"></v-radio>
                                                  <v-radio label="아이" :value="4"></v-radio>
                                                </v-radio-group>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div class="psycho-prevnext">
                                          <div class="psyprev">
                                            <button href="#" style="color:black;" @click="$router.push('/PsychoTest')">◀ 돌아가기</button>
                                          </div>
                                          <div class="psynext">
                                            <button href="#" style="color:black;" @click="next">다음 ▶</button>
                                          </div>
                                      </div>
                                  </div>




                                  <div v-else-if="number === 2">
                                      <div class="psycho-area" style="background-image:url(/image/psycho/backimg.png)"> 
                                          <div class="psycho-content">
                                              <p>쇠로된 상자를 열기위한 가장 좋은 방법은 무엇입니까?</p>
                                          </div>
                                          <div class="psycho-selectarea">
                                              <div class="psycho-radio">
                                                <v-radio-group v-model="answers">
                                                  <v-radio label="주문을 외운다" :value="1"></v-radio>
                                                  <v-radio label="집어던진다" :value="2"></v-radio>
                                                  <v-radio label="도구를 이용한다" :value="3"></v-radio>
                                                  <v-radio label="포기한다" :value="4"></v-radio>
                                                </v-radio-group>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div class="psycho-prevnext">
                                          <div class="psyprev">
                                            <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                          </div>
                                          <div class="psynext">
                                            <button href="#" style="color:black;" @click="next">다음 ▶</button>
                                          </div>
                                      </div>
                                  </div>




                                  <div v-else-if="number === 3">
                                      <div class="psycho-area" style="background-image:url(/image/psycho/backimg.png)"> 
                                          <div class="psycho-content">
                                              <p>오늘은 학교에서 자유수업이 있습니다. 어느 수업을 들으시겠습니까?</p>
                                          </div>
                                          <div class="psycho-selectarea">
                                              <div class="psycho-radio">
                                                <v-radio-group v-model="answers">
                                                  <v-radio label="음악" :value="1"></v-radio>
                                                  <v-radio label="미술" :value="2"></v-radio>
                                                  <v-radio label="체육" :value="3"></v-radio>
                                                  <v-radio label="과학" :value="4"></v-radio>
                                                </v-radio-group>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div class="psycho-prevnext">
                                          <div class="psyprev">
                                            <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                          </div>
                                          <div class="psynext">
                                            <button href="#" style="color:black;" @click="next">다음 ▶</button>
                                          </div>
                                      </div>
                                  </div>




                                  <div v-else-if="number === 4">
                                      <div class="psycho-area" style="background-image:url(/image/psycho/backimg.png)"> 
                                          <div class="psycho-content">
                                              <p>남들보다 좀 더 튀는 악세사리를 장만하려고 하는데 무엇을 사시겠습니까?</p>
                                          </div>
                                          <div class="psycho-selectarea">
                                              <div class="psycho-radio">
                                                <v-radio-group v-model="answers">
                                                  <v-radio label="소리가나는 물건" :value="1"></v-radio>
                                                  <v-radio label="손전등" :value="2"></v-radio>
                                                  <v-radio label="원색의모자" :value="3"></v-radio>
                                                  <v-radio label="여러가지 악세사리" :value="4"></v-radio>
                                                </v-radio-group>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div class="psycho-prevnext">
                                          <div class="psyprev">
                                            <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                          </div>
                                          <div class="psynext">
                                            <button href="#" style="color:black;" @click="next">다음 ▶</button>
                                          </div>
                                      </div>
                                  </div>




                                  <div v-else-if="number === 5">
                                      <div class="psycho-area" style="background-image:url(/image/psycho/backimg.png)"> 
                                          <div class="psycho-content">
                                              <p>영화를 보기로 한 당신 어떤 장르를 보시겠습니까?</p>
                                          </div>
                                          <div class="psycho-selectarea">
                                              <div class="psycho-radio">
                                                <v-radio-group v-model="answers">
                                                  <v-radio label="공포" :value="1"></v-radio>
                                                  <v-radio label="로맨스" :value="2"></v-radio>
                                                  <v-radio label="스릴러" :value="3"></v-radio>
                                                  <v-radio label="액션" :value="4"></v-radio>
                                                </v-radio-group>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div class="psycho-prevnext">
                                          <div class="psyprev">
                                            <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                          </div>
                                          <div class="psynext">
                                            <button href="#" style="color:black;" @click="next">다음 ▶</button>
                                          </div>
                                      </div>
                                  </div>




                                  <div v-else-if="number === 6">
                                      <div class="psycho-area" style="background-image:url(/image/psycho/backimg.png)"> 
                                          <div class="psycho-content">
                                              <p>6</p>
                                          </div>
                                          <div class="psycho-selectarea">
                                              <div class="psycho-radio">
                                                <v-radio-group v-model="answers">
                                                  <v-radio label="귀신" :value="1"></v-radio>
                                                  <v-radio label="강아지" :value="2"></v-radio>
                                                  <v-radio label="사람" :value="3"></v-radio>
                                                  <v-radio label="아이" :value="4"></v-radio>
                                                </v-radio-group>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div class="psycho-prevnext">
                                          <div class="psyprev">
                                            <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                          </div>
                                          <div class="psynext">
                                            <button href="#" style="color:black;" @click="next">다음 ▶</button>
                                          </div>
                                      </div>
                                  </div>




                                  <div v-else-if="number === 7">
                                      <div class="psycho-area" style="background-image:url(/image/psycho/backimg.png)"> 
                                          <div class="psycho-content">
                                              <p>7</p>
                                          </div>
                                          <div class="psycho-selectarea">
                                              <div class="psycho-radio">
                                                <v-radio-group v-model="answers">
                                                  <v-radio label="귀신" :value="1"></v-radio>
                                                  <v-radio label="강아지" :value="2"></v-radio>
                                                  <v-radio label="사람" :value="3"></v-radio>
                                                  <v-radio label="아이" :value="4"></v-radio>
                                                </v-radio-group>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div class="psycho-prevnext">
                                          <div class="psyprev">
                                            <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                          </div>
                                          <div class="psynext">
                                            <button href="#" style="color:black;" @click="next">다음 ▶</button>
                                          </div>
                                      </div>
                                  </div>




                                  <div v-else-if="number === 8">
                                      <div class="psycho-area" style="background-image:url(/image/psycho/backimg.png)"> 
                                          <div class="psycho-content">
                                              <p>8</p>
                                          </div>
                                          <div class="psycho-selectarea">
                                              <div class="psycho-radio">
                                                <v-radio-group v-model="answers">
                                                  <v-radio label="귀신" :value="1"></v-radio>
                                                  <v-radio label="강아지" :value="2"></v-radio>
                                                  <v-radio label="사람" :value="3"></v-radio>
                                                  <v-radio label="아이" :value="4"></v-radio>
                                                </v-radio-group>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div class="psycho-prevnext">
                                          <div class="psyprev">
                                            <button href="#" style="color:black;" @click="$router.push('/PsychoTest')">◀ 이전</button>
                                          </div>
                                          <div class="psynext">
                                            <button href="#" style="color:black;" @click="next">다음 ▶</button>
                                          </div>
                                      </div>
                                  </div>




                                  <div v-else-if="number === 9">
                                      <div class="psycho-area" style="background-image:url(/image/psycho/backimg.png)"> 
                                          <div class="psycho-content">
                                              <p>9</p>
                                          </div>
                                          <div class="psycho-selectarea">
                                              <div class="psycho-radio">
                                                <v-radio-group v-model="answers">
                                                  <v-radio label="귀신" :value="1"></v-radio>
                                                  <v-radio label="강아지" :value="2"></v-radio>
                                                  <v-radio label="사람" :value="3"></v-radio>
                                                  <v-radio label="아이" :value="4"></v-radio>
                                                </v-radio-group>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div class="psycho-prevnext">
                                          <div class="psyprev">
                                            <button href="#" style="color:black;" @click="prev">◀ 이전</button>
                                          </div>
                                          <div class="psynext">
                                            <button href="#" style="color:black;" @click="next">다음 ▶</button>
                                          </div>
                                      </div>
                                  </div>




                                  <div v-else-if="number === 10">
                                      <div class="psycho-area" style="background-image:url(/image/psycho/backimg.png)"> 
                                          <div class="psycho-content">
                                              <p>10</p>
                                          </div>
                                          <div class="psycho-selectarea">
                                              <div class="psycho-radio">
                                                <v-radio-group v-model="answers">
                                                  <v-radio label="귀신" :value="1"></v-radio>
                                                  <v-radio label="강아지" :value="2"></v-radio>
                                                  <v-radio label="사람" :value="3"></v-radio>
                                                  <v-radio label="아이" :value="4"></v-radio>
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
        answer:0,
        number: 1,
        shoe: true

      }
  },  
  methods:{
    next(){
      var answer=Number(this.answers)
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
    finish() {
      if(this.answers==1){ 
      this.answer++;
      this.$router.push('/PsychoFinish?answer='+this.answer);
    }
      else {
        this.$router.push('/PsychoFinish?answer='+this.answer);
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