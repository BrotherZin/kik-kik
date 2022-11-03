<template>
    <v-layout class="background" align-center justify-center>
      <div class="inside">
        <v-layout align-center justify-center>
          <div style="display: block; margin: auto; width: auto; height: auto">
            <video :src="videoList[current]" class="ahri" muted ref="video" @ended="videoEnded"></video>
          </div>
          </v-layout>
          <div class="title">
      <div class="hzt-center question-text">{{ questions[step].question }}</div>
    </div>

    <div class="score-popup" :style="getScorePopupStyle()" v-if="isResult">
      <div class="center">
        <div class="score-text">{{ incScore > 0? "정답!": "땡!" }}</div>
        <div class="score-text">+{{ incScore }}</div>
      </div>
    </div>

    <div v-if="isResult" class="bl-next">
      <button class="btn-next" @click="next">{{ nextBtnText }}</button>
    </div>

    <div class="hzt-center answers">
      <div v-if="isResult">
        <div
          class="answer" 
          v-for="(item, i) in questions[step].answers"
          :key="i"
          :style="getResultStyle(item)"
        >
          <div class="answer-text">{{ item.text }}</div>
        </div> <!--문제 선택-->
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
          </div>
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
      step: 0,
      score: 0,
      current:0,
      videoList:["/videos/ahri.mp4","/videos/yone.mp4","/videos/ezreal.mp4","/videos/zyra.mp4"],
      scoreTitle: "", // 문제 선택 후 결과 문구 (정답입니다. 틀렸습니다. 등)
      incScore: 0,  // 획득한 점수
      nextBtnText: "다음",
      questions: [
        {
          videoList:["/videos/ahri.mp4"],
          score: 10,
          question: "무슨 스킬이게?",
          answers: [
            {
              text: '매혹',
              isCorrect: true,
            },
            {
              text: '황홀한 저주',
              isCorrect: false,
            },
            {
              text: '앙코르',
              isCorrect: false,
            },
            {
              text: '매혹의 질주',
              isCorrect: false,
            },
          ],
        },
        {
          score: 10,
          question: "무슨 스킬이게?",
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
          score: 10,
          question: "무슨 스킬이게?",
          answers: [
            {
              text: '신비한 화살',
              isCorrect: false,
            },
            {
              text: '정수의 흐름',
              isCorrect: false,
            },
            {
              text: '비전 이동',
              isCorrect: false,
            },
            {
              text: '정조준 일격',
              isCorrect: true,
            },
          ],
        },
        {
          score: 10,
          question: "무슨 스킬이게?",
          answers: [
            {
              text: '치명적인 가시',
              isCorrect: true,
            },
            {
              text: '맹렬한 성장',
              isCorrect: false,
            },
            {
              text: '휘감는 뿌리',
              isCorrect: false,
            },
            {
              text: '올가미 덩굴',
              isCorrect: false,
            },
          ],
        },
      ],
      answerColors: [],
      isResult: false,
    };
  },
  mounted(){
    this.$refs.video.play()
  },
  methods: {
    videoEnded(){
        this.current++
        Vue.nextTick(()=>{
          this.$refs.video.currentTime=0
          this.$refs.video.play()
        })
      },  
    initialize() {
      this.step = 0;
      this.score = 0;
      this.incScore = 0;
      this.isResult = false;
    },
    getAnswerStyle(index) {
      if (this.answerColors.length < index) {
        return {
          backgroundColor: this.answerColors[0],
        };
      } else {
        return {
          backgroundColor: this.answerColors[index],
        };
      }
    },
    getResultStyle(item) { //정답 색상
      if (item.isCorrect) {
        return {
          fontSize: '30px',
          textAlign : "center",
        };
      } else {
        return {
          fontSize: '30px',
          textAlign : "center",
        };
      }
    },
    getScorePopupStyle() {
      if (this.incScore > 0) {
        return {
          fontSize: '30px',
          textAlign : "center",
        };
      } else {
        return {
          fontSize: '30px',
          textAlign : "center",
        };
      }
    },
    selectAnswer(index) {
      console.log(
        `step : ${this.step}, index : ${index}, data : ${
          this.questions[this.step].answers[index]
        }`
      );
      const selectedAnswer = this.questions[this.step].answers[index];
      const incScore = this.questions[this.step].score;
      if (selectedAnswer.isCorrect) {
        this.score += incScore;
        this.incScore = incScore;
      } else {
        this.incScore = 0;
      }
      this.isResult = true;
    },
    next() {
      if (++this.step >= this.questions.length) {
        alert(`퀴즈가 완료되었습니다.\n총점 : ${this.score}`);
        this.initialize();
        this.$router.push("/");
      }

      if (this.step + 1 >= this.questions.length) {
        this.nextBtnText = "점수보기";
      } else {
        this.nextBtnText = "다음";
      }

      this.isResult = false;
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
    margin-top:70px;
  }
  .answer{
    font-size:30px;
    text-align: center;
    margin-top:40px;
  }
  .hzt-center.question-text{
    font-size:40px;
    text-align: center;
    margin-top:40px;
  }
  </style>
      