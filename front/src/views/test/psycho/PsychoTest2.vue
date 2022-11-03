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

                <div class="psycho-area" style="background-image:url(/image/test/backimg.png)"> 
                    <div class="psycho-content">
                        <p>쇠로된 상자를 열기위한 가장 좋은 방법은 무엇입니까?</p>
                    </div>
                <div class="psycho-selectarea">
                    <div class="psycho-radio">
                      
                      <v-radio-group v-model="answer">
                        <v-radio label="주문을 외운다" :value="1"></v-radio>
                        <v-radio label="집어던진다" :value="2"></v-radio>
                        <v-radio label="도구를 이용한다" :value="3"></v-radio>
                        <v-radio label="포기한다" :value="4"></v-radio>
                      </v-radio-group>
                        <!-- <input type="radio" id="rd1" name="radio" value="1"/>
                        <label for="rd1">귀신</label><br/>
                        <br>
                        <input type="radio" id="rd2" name="radio" value="2"/>
                        <label for="rd2">강아지</label><br/>
                        <br>
                        <input type="radio" id="rd3" name="radio" value="3"/>
                        <label for="rd3">사람</label><br/>
                        <br>
                        <input type="radio" id="rd4" name="radio" value="4"/>
                        <label for="rd4">아이</label><br/>
                        <br> -->
                    </div>
                </div>
            </div>
            <div class="psycho-prevnext">
                <div class="psyprev">
                  <a href="#" style="color:black;" @click="$router.push('/PsychoTest')">◀ 이전</a>
                </div>
                <div class="psynext">
                  <a href="#" style="color:black;" @click="next()">다음 ▶</a>
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
        answer:null
      }
  },  
  methods:{
    next(){
      var answer=Number(this.$route.query.answer)
      if(this.answer==4){
        
        answer++
        this.$router.push('/PsychoTest3?answer='+answer)
      }
      else{
        this.$router.push('/PsychoTest3?answer='+answer)
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
  font-size: 100px;
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