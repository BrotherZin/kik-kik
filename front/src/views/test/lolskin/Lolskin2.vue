<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <div style="display: block; margin: auto; width: auto; height: auto">
          <img :src="questions[step].image" class="ahri" >
        </div>
        </v-layout>
        <div class="title">
    <div class="hzt-center question-text">{{ questions[step].question }}</div> <!-- 질문 -->
  </div>

  <div class="hzt-center answers"> 이 스킨의 이름을 맞춰보자!
    <div class="score-popup" :style="getScorePopupStyle()" v-if="isResult">
    <div class="center">
      <div class="score-text">{{ incScore > 0? "정답!": "땡!" }}</div>
      <div class="score-text">+{{ incScore }}</div>
    </div>
  </div>
    <div v-if="isResult">
      <div
        class="answer" 
        v-for="(item, i) in questions[step].answers"
        :key="i"
        :style="getResultStyle(item)"
      > <!-- 정답, 오답 표시 -->
        <div class="answer-text">{{ item.text }}</div>
      </div> <!--문제 선택-->
    </div>
    <div v-if="isResult" class="next">
      <button class="btn-next" @click="next">{{ nextBtnText }}</button>
  </div>
    <div v-else>
      <div
        class="answer"
        v-for="(item, i) in questions[step].answers"
        :key="i"
        :style="getAnswerStyle(i)"
        @click="selectAnswer(i)"
      >
        <div class="answer-text">
          {{ item.text }}
        </div> <!--문제 선택-->
      </div>
      <div class="next2">
        <button class="btn-next" @click="next">다음</button>
      </div>
    </div>
  </div>
  </div>
  </v-layout>
</template>
    
<script>
// import HelloWorld from "../components/HelloWorld";
import Vue from "vue"
export default {
  name: "Home",
 
  data: () => {
  return {
    step: 0, // 현재 진행중인 문제 번호
    score: 0, // 점수
    scoreTitle: "", // 문제 선택 후 결과 문구 (정답입니다. 틀렸습니다. 등)
    incScore: 0,  // 획득한 점수
    nextBtnText: "다음", // 다음 문제 버튼 텍스트
    questions: [
      {
        image:"/image/lol/skin/all out eve.png",
          score: 10,
          answers: [
            {
              text: 'K/DA ALL OUT',
              isCorrect: true,
            },
            {
              text: 'K/DA POP/STARS',
              isCorrect: false,
            },
            {
              text: '프레스티지 K/DA ALL OUT',
              isCorrect: false,
            },
            {
              text: '프레스티지 K/DA POP/STARS',
              isCorrect: false,
            },
          ],
        },
        {
          score: 10,
          image: "/image/lol/skin/popstarKai.png",
          answers: [
            {
              text: 'K/DA ALL OUT',
              isCorrect: false,
            },
            {
              text: 'K/DA POP/STARS',
              isCorrect: true,
            },
            {
              text: '프레스티지 K/DA ALL OUT',
              isCorrect: false,
            },
            {
              text: '프레스티지 K/DA POP/STARS',
              isCorrect: false,
            },
          ],
        },
        {
          image: "/image/lol/skin/nami 프레스티지.png",
          score: 10,
          answers: [
            {
              text: '우주의 문명 나미',
              isCorrect: false,
            },
            {
              text: '프레스티지 우주의 문명 나미',
              isCorrect: false,
            },
            {
              text: '우주 그루브 나미',
              isCorrect: false,
            },
            {
              text: '프레스티지 우주 그루브 나미',
              isCorrect: true,
            },
          ],
        },
        {
          image: "/image/lol/skin/전투여왕 카타리나.png",
          score: 10,
          answers: [
            {
              text: '전투사관학교 카타리나',
              isCorrect: false,
            },
            {
              text: '전투 여왕 카타리나',
              isCorrect: true,
            },
            {
              text: '불의 축제 카타리나',
              isCorrect: false,
            },
            {
              text: '고교 여신 카타리나',
              isCorrect: false,
            },
          ],
        },
        {
          image: "/image/lol/skin/빛인도자몰가.png",
          score: 10,
          answers: [
            {
              text: '천상의 빛 모르가나',
              isCorrect: false,
            },
            {
              text: '은빛 모르가나',
              isCorrect: false,
            },
            {
              text: '빛의 인도자 모르가나',
              isCorrect: true,
            },
            {
              text: '신성한 모르가나',
              isCorrect: false,
            },
          ],
        },
        {
          image: "/image/lol/skin/몽상용야스오.png",
          score: 10,
          answers: [
            {
              text: '진리용 야스오',
              isCorrect: false,
            },
            {
              text: '영혼의 꽃 야스오',
              isCorrect: false,
            },
            {
              text: '몽상용 야스오',
              isCorrect: true,
            },
            {
              text: '정령 수호자 야스오',
              isCorrect: false,
            },
          ],
        },
        {
          image: "/image/lol/skin/영꽃세트.png",
          score: 10,
          answers: [
            {
              text: '평온용 세트',
              isCorrect: false,
            },
            {
              text: '불멸의 영웅 세트',
              isCorrect: false,
            },
            {
              text: '영혼의 꽃 세트',
              isCorrect: true,
            },
            {
              text: '정령용 세트',
              isCorrect: false,
            },
          ],
        },
        {
          image: "/image/lol/skin/우르프켄치.png",
          score: 10,
          answers: [
            {
              text: '우르프 켄치',
              isCorrect: true,
            },
            {
              text: '나 탐켄치 아니다',
              isCorrect: false,
            },
            {
              text: '웰시켄치',
              isCorrect: false,
            },
            {
              text: '식사시간! 켄치',
              isCorrect: false,
            },
          ],
        },
        {
          image: "/image/lol/skin/아케인징크스.png",
          score: 10,
          answers: [
            {
              text: '난폭한 징크스',
              isCorrect: false,
            },
            {
              text: '보완관 징크스',
              isCorrect: false,
            },
            {
              text: '은퇴당한 징크스',
              isCorrect: false,
            },
            {
              text: '아케인 징크스',
              isCorrect: true,
            },
          ],
        },
        {
          image: "/image/lol/skin/별수호자조이.png",
          score: 10,
          answers: [
            {
              text: '별 수호자 조이',
              isCorrect: true,
            },
            {
              text: '암흑의 별 조이',
              isCorrect: false,
            },
            {
              text: '악의 여단 조이',
              isCorrect: false,
            },
            {
              text: '어둠의 인도자 조이',
              isCorrect: false,
            },
          ],
        },
        {
          image: "/image/lol/skin/전투다이애나.png",
          score: 10,
          answers: [
            {
              text: '에테르 날개 케일',
              isCorrect: false,
            },
            {
              text: '전투 여왕 이렐리아',
              isCorrect: false,
            },
            {
              text: '전투 여왕 피오라',
              isCorrect: false,
            },
            {
              text: '전투 여왕 다이애나',
              isCorrect: true,
            },
          ],
        },
    ],
    answerColors: [],// 문제 선택 후 결과 색상
    isResult: false,// 문제 선택 후 결과 화면 여부
  };
  
},
methods: {
  videoEnded(){
    },
  initialize() {
    this.step = 0; // 문제 번호
    this.score = 0; // 점수
    this.incScore = 0; // 획득한 점수
    this.isResult = false; // 결과 화면 여부
  },
  getAnswerStyle(index) {
    if (this.answerColors.length < index) { // 선택한 답이 없는 경우
      return { // 기본 스타일
        backgroundColor: this.answerColors[0], // 선택한 답이 없는 경우 기본 색상
      };
    } else { // 선택한 답이 있는 경우
      return { // 선택한 답의 색상
        backgroundColor: this.answerColors[index], // 선택한 답의 색상
      };
    }
  },
  getResultStyle(item) { //문제 글꼴 정답 색상
    if (item.isCorrect) {
      return {
        fontSize: '30px',
        textAlign : "center",
        color : "green"
      };
    } else { //문제 글꼴 오답 색상
      return {
        fontSize: '30px',
        textAlign : "center",
        color : "red"
      };
    }
  },
  getScorePopupStyle() { //정답! 표시
    if (this.incScore > 0) {
      return {
        fontSize: '30px',
        textAlign : "center",
        color : "blue"
      };
    } else {
      return {//땡! 표시
        fontSize: '30px',
        textAlign : "center",
        color : "red"
      };
    }
  },
  selectAnswer(index) { //정답 선택
    console.log(
      `step : ${this.step}, index : ${index}, data : ${ // 선택한 문제의 정답 여부
        this.questions[this.step].answers[index].isCorrect //정답인지 아닌지 확인
        // this.questions[this.step].answers[index]
      }`
    );
    const selectedAnswer = this.questions[this.step].answers[index];//선택한 답
    const incScore = this.questions[this.step].score;//점수
    if (selectedAnswer.isCorrect) {//정답일 경우
      this.score += incScore;//점수 더하기
      this.incScore = incScore;//점수 표시
    } else {
      this.incScore = 0;//점수 표시
    }
    this.isResult = true;//정답 표시
  },
  next() {
    if (++this.step >= this.questions.length) {//다음 문제로 넘어갈 경우
      alert(`축하합니다! 당신의 흑우력 점수입니다! \n총점 : ${this.score}`);//총점 표시
      this.initialize();//초기화
      this.$router.push("/");//메인페이지로 이동
    }

    if (this.step + 1 >= this.questions.length) {//다음 문제가 없을 경우
      this.nextBtnText = "점수보기";//점수보기로 변경
    } else {//다음 문제가 있을 경우
      this.nextBtnText = "다음";//다음으로 변경
    }

    this.isResult = false;//정답 표시
  },
},
};
</script>
    <style scoped>
    @import url('https://fonts.googleapis.com/css?family=Yeon+Sung:400');

* {
  font-family: 'Yeon Sung', cursive;
}
.background {
  height: 100%;
  background-color: #e6e6fa;
  display: grid;
}
.logo{
  display: flex;
  margin-right: 100px;
}
.inside {
  background-color: white;
  width: 1500px;
  height: 950px;
  margin-top: 50px;
  border-radius: 50px 50px 50px 50px;
}
.image {
margin-top: 50px;
width: auto;
height: auto;
max-width: 1000px;
max-height: 900px;
}
.lol-text{
  text-align: center;
  font-size:50px;
  margin-top:40px;
}
.v-btn{
  width:500px;
  font-size:30px;
  font-weight: bold;
}
.ahri{
  margin-top:50px;
  height: 400px;
  width: 700px;
  border-radius: 100px 100px 100px 100px;
}
.answer{
  font-size:40px;
  text-align: center;
}
.hzt-center{
  font-size:70px;
  text-align: center;
}
.btn-next{
  font-size:70px;
  text-align: right;
}
.next{
  text-align: right;
  margin-right: 200px;
}
.next2{
  text-align: right;
  margin-right: 200px;
  margin-top: 30px;
}
video{
  height: 400px;
}
.answer:hover{
  background: transparent;
  color: #00AFFF;
  box-shadow: none;
}
.btn-next:hover{
  color: #76aef1;
}
</style>
    