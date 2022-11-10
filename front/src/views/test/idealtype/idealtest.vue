<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <div>
          <h1>아이돌 이상형 월드컵 {{ round * 2 }}강 {{ step }}번째 라운드</h1>
        </div>
      </v-layout>
      <v-layout align-center justify-center>
        <div
          class="selectimg"
          style="display: block; margin: auto; width: auto; height: auto"
          @click="selectideal(getLeft())"
        >
          <img :src="getLeft().img" alt="" />
        </div>
        <div class="vs">vs</div>
        <div
          class="selectimg"
          style="display: block; margin: auto; width: auto; height: auto"
          @click="selectideal(getRight())"
        >
          <img :src="getRight().img" alt="" />
        </div>
      </v-layout>
    </div>
  </v-layout>
</template>

<script>
import _ from "underscore";

export default {
  data() {
    return {
      // 라운드와 스코어를 저장하는 변수, 라운드는 4, 스텝은 2까지만,  우승한 아이돌을 저장하는 변수 선택되면 1점씩 더해짐

      round: 2,
      step: 1,
      score: 0,
      winner: null,

      // 아이돌 리스트를 저장하는 변수
      list: [
        {
          name: "아이유",
          img: "/image/idealtype/iu2.png",
          score: 0,
        },
        {
          name: "카리나",
          img: "/image/idealtype/karina.png",
          score: 0,
        },
        {
          name: "윈터",
          img: "/image/idealtype/winter.png",
          score: 0,
        },
        {
          name: "민지",
          img: "/image/idealtype/minji.png",
          score: 0,
        },
      ],
    };
  },
  methods: {
    // 라운드를 1씩 감소시키는 함수
    roundDown() {
      this.round--;
    },
    // 스코어를 1씩 증가시키는 함수
    scoreUp() {
      this.score++;
    },
    // 스텝을 1씩 증가시키는 함수
    stepUp() {
      this.step++;
    },
    // 스텝을 1씩 감소시키는 함수
    stepDown() {
      this.step--;
    },
    // 선택된 아이돌의 스코어를 1씩 증가시키고, 우승한 아이돌을 저장하는 함수
    selectideal(ideal) {
      ideal.score++;
      this.winner = ideal;
      // 라운드가 1이면 라운드를 감소시키고, 스텝을 1로 초기화시키고, 우승한 아이돌을 리스트에 저장하는 함수
      if (this.round == 1) {
        this.roundDown();
        this.step = 1;
        this.list.push(this.winner);
        // 라운드와 스텝이 같아지면 다음 라운드로 넘어가고, 스텝을 1로 초기화시키는 함수
      } else if (this.round == this.step) {
        this.roundDown();

        // 라운드가 1이 아니면 스텝을 증가시키고, 우승한 아이돌을 리스트에 저장하는 함수
      } else {
        this.stepUp();
        this.list.push(this.winner);
      }
    },

    // 왼쪽에 아이돌을 표시하는 함수
    getLeft() {
      // 라운드가 1이면 리스트의 홀수번째 아이돌을 반환

      return this.list[this.step * 2 - 2];
    },

    // 오른쪽에 표시될 아이돌을 반환하는 함수
    getRight() {
      // 짝수번째 아이돌을 반환
      return this.list[this.step * 2 - 1];
    },
  },
};

// getLeft() {
//   var selectedList = this.getSelected();
//   console.log(selectedList, Math.floor(this.step / 2));
//   return selectedList[Math.floor(this.step / 2)];
// },

// getRight() {
//   var selectedList = this.getSelected();
//   return selectedList[Math.floor(this.step / 2) + 1];
// },
//     getSelected() {
//       if (this.round == this.list.length) {
//         return this.list;
//       }
//       return _.chain(this.list)
//         .map((item) => {
//           if (item.selected) {
//             return item;
//           }
//         })
//         .compact()
//         .value();
//     },
//   },
// };
</script>

<style>
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
  width: auto;
  height: auto;
  max-width: 500px;
  max-height: 500px;
  display: block;
  margin: auto;
}
.vs {
  font-size: 2.2em;
  font-weight: bold;
}
.selectimg {
  width: 200px;
  height: 200px;
  max-width: 500px;
  max-height: 500px;
  display: block;
  margin: auto;
}
</style>