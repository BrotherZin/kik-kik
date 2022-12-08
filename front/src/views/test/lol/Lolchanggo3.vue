<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
            <video :src="questions[step].video" class="ahri" muted ref="video"  @ended="videoEnded"></video>
             <!-- video 태그, 음소거지정--> 
          </div>
          </v-layout>
          <div class="title">
      <div class="hzt-center question-text">{{ questions[step].question }}</div> <!-- 질문 -->
    </div>
  
    <div class="hzt-center answers"> 무슨 스킬이게?
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
      current:0, // 현재 진행중인 비디오 번호
      scoreTitle: "", // 문제 선택 후 결과 문구 (정답입니다. 틀렸습니다. 등)
      incScore: 0,  // 획득한 점수
      nextBtnText: "다음", // 다음 문제 버튼 텍스트
      questions: [
      {
        video: "/videos/kaisa.mp4",
        score: 10,
        answers: [
          {
            text: '이케시아 폭우',
            isCorrect: false,
          },
          {
            text: '공허추적자',
            isCorrect: true,
          },
          {
            text: '공허의 습격',
            isCorrect: false,
          },
          {
            text: '공허의 부름',
            isCorrect: false,
          },
        ],
      },
        {
          score: 10,
          video: "/videos/yone.mp4",
          answers: [
            {
              text: '최후의 숨결',
              isCorrect: false,
            },
            {
              text: '일제 사격',
              isCorrect: false,
            },
            {
              text: '운명봉인',
              isCorrect: true,
            },
            {
              text: '영혼 가르기',
              isCorrect: false,
            },
          ],
        },
        {
          video: "/videos/zeri.mp4",
          score: 10,
          answers: [
            {
              text: '빠직!',
              isCorrect: false,
            },
            {
              text: '초강력 레이저',
              isCorrect: false,
            },
            {
              text: '스파크 방출',
              isCorrect: false,
            },
            {
              text: '번개 방출',
              isCorrect: true,
            },
          ],
        },
        {
          video: "/videos/zoe.mp4",
          score: 10,
          answers: [
            {
              text: '통통별',
              isCorrect: true,
            },
            {
              text: '반짝반짝!',
              isCorrect: false,
            },
            {
              text: '은하수의 별',
              isCorrect: false,
            },
            {
              text: '빛나는 성운',
              isCorrect: false,
            },
          ],
        },
        {
          video: "/videos/aphelios.mp4",
          score: 10,
          answers: [
            {
              text: '월광포화',
              isCorrect: true,
            },
            {
              text: '월광세례',
              isCorrect: false,
            },
            {
              text: '달의일격',
              isCorrect: false,
            },
            {
              text: '달의불꽃',
              isCorrect: false,
            },
          ],
        },
        {
          video: "/videos/xayha.mp4",
          score: 10,
          answers: [
            {
              text: '관통상',
              isCorrect: false,
            },
            {
              text: '저항의 비상',
              isCorrect: true,
            },
            {
              text: '깃부르미',
              isCorrect: false,
            },
            {
              text: '죽음의 깃',
              isCorrect: false,
            },
          ],
        },
        {
          video: "/videos/belveth.mp4",
          score: 10,
          answers: [
            {
              text: '연보랏빛 죽음',
              isCorrect: false,
            },
            {
              text: '끝없는 연회',
              isCorrect: true,
            },
            {
              text: '위와 아래',
              isCorrect: false,
            },
            {
              text: '여제의 소용돌이',
              isCorrect: false,
            },
          ],
        },
        {
          video: "/videos/renata.mp4",
          score: 10,
          answers: [
            {
              text: '남작의 영향력',
              isCorrect: false,
            },
            {
              text: '교란의 안개',
              isCorrect: false,
            },
            {
              text: '적대적 인수',
              isCorrect: true,
            },
            {
              text: '화학공학 결집',
              isCorrect: false,
            },
          ],
        },
        {
          video: "/videos/vex.mp4",
          score: 10,
          answers: [
            {
              text: '커지는 어둠',
              isCorrect: false,
            },
            {
              text: '안개 화살',
              isCorrect: true,
            },
            {
              text: '그림자 파동',
              isCorrect: false,
            },
            {
              text: '그림자 일격',
              isCorrect: false,
            },
          ],
        },
        {
          video: "/videos/gwen.mp4",
          score: 10,
          answers: [
            {
              text: '신성한 가위',
              isCorrect: false,
            },
            {
              text: '돌격가위',
              isCorrect: false,
            },
            {
              text: '싹둑싹둑!',
              isCorrect: true,
            },
            {
              text: '가위 난도질',
              isCorrect: false,
            },
          ],
        },
      ],
      answerColors: [],// 문제 선택 후 결과 색상
      isResult: false,// 문제 선택 후 결과 화면 여부
    };
    
  },
  mounted(){
    this.$refs.video.play() //비디오 자동재생
  },
  methods: {
    videoEnded(){
        this.current++ //비디오가 끝나면 다음 비디오 재생
        Vue.nextTick(()=>{ //비디오가 끝나면 다음 비디오로 넘어가게
          // this.$refs.video.currentTime=0
        this.$refs.video.play() //비디오가 끝나면 다음 비디오로 넘어가게
        })
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
        this.videoEnded()
        alert(`두근두근 너의 롤창점수는? \n총점 : ${this.score}`);//총점 표시
        this.initialize();//초기화
        this.$router.push("/Alltest");//메인페이지로 이동
      }
  
      if (this.step + 1 >= this.questions.length) {//다음 문제가 없을 경우
        this.nextBtnText = "점수보기";//점수보기로 변경
      } else {//다음 문제가 있을 경우
        this.nextBtnText = "다음";//다음으로 변경
      }
  
      this.isResult = false;//정답 표시
      this.videoEnded()
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
  .logo2{
    width: 500px;
    height: 100px;
  }
  .inside {
    background-color: white;
    width: 1500px;
    height: 950px;
    margin-top: 50px;
    border-radius: 100px 100px 100px 100px;
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
    border-radius: 50px 50px 50px 50px;
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
  
  .answer {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  .answer:hover{
    background: transparent;
    color: #76aef1;
    box-shadow: none;
  }
  .answer:hover:after {
    transition: all 500ms ease;
    height: 100%;
  }
  .btn-next:hover{
    color: #76aef1;
  }
  </style>
      