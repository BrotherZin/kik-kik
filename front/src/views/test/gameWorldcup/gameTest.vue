<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout column fill-height class="round">
        <div v-if="roundLength > 4" class="vs">
          추억의 게임 월드컵 {{ roundLength }}강
        </div>
        <div v-else-if="roundLength == 4" class="vs">준결승</div>
        <div v-else-if="roundLength == 2" class="vs">결승</div>

        <v-flex>
          <div class="vsvs">
            <v-layout fill-heght>
              <v-flex xs6 class="left">
                <div class="BZ">{{ getLeftItem().name }}</div>
                <v-img
                  :aspect-ratio="1 / 1"
                  class="image"
                  :src="getLeftItem().img"
                  alt=""
                />
                <div @click="clickLeft" class="clickspace"></div>
              </v-flex>
              <v-flex xs6 class="right">
                <div class="BZ">{{ getRightItem().name }}</div>
                <v-img
                  class="image"
                  :aspect-ratio="1 / 1"
                  :src="getRightItem().img"
                  alt=""
                />
                <div @click="clickRight" class="clickspace"></div>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
        <div class="vsimg"><img src="/image/gameworldcup/vs.png" /></div>
      </v-layout>
    </div>
  </v-layout>
</template>

<script>
import _ from "underscore";

export default {
  methods: {
    getCurrentList() {
      return _.chain(this.list)
        .map((item) => {
          if (!item.round) {
            return item;
          }
        })
        .compact()
        .first(2)
        .value();
    },
    getLeftItem() {
      return this.getCurrentList()[0];
    },
    getRightItem() {
      return this.getCurrentList()[1];
    },
    clickLeft() {
      var currentList = this.getCurrentList();

      currentList[0].selected = true;
      if (this.roundLength == 2) {
        this.finish();
        return;
      }
      currentList[0].round = true;
      currentList[1].round = true;

      if (this.getCurrentList().length == 0) {
        this.nextRound();
      }
    },
    clickRight() {
      var currentList = this.getCurrentList();

      currentList[1].selected = true;
      if (this.roundLength == 2) {
        this.finish();
        return;
      }
      currentList[0].round = true;
      currentList[1].round = true;

      if (this.getCurrentList().length == 0) {
        this.nextRound();
      }
    },
    finish() {
      var selected = _.find(this.getCurrentList(), (item) => {
        return item.selected;
      });
      console.log("finish", selected);

      this.$router.push(
        "/gameEnd?name=" + selected.name + "&img=" + selected.img
      );
    },
    nextRound() {
      this.list = _.chain(this.list)
        .map((item) => {
          if (item.selected) {
            item.round = false;
            return item;
          }
        })
        .compact()
        .value();
      _.each(this.list, (item) => {
        item.selected = false;
        item.round = false;
      });
      console.log(this.list);
      this.roundLength = this.list.length;
    },
  },
  mounted() {
    this.roundLength = this.list.length;
  },
  data() {
    return {
      roundLength: 1,
      list: [
        {
          name: "메이플스토리",
          img: "/image/gameWorldcup/1.jpg",
          selected: false,
          round: false,
        },
        {
          name: "스타크래프트",
          img: "/image/gameWorldcup/2.jpg",
          selected: false,
          round: false,
        },
        {
          name: "피파온라인2",
          img: "/image/gameWorldcup/3.jpg",
          selected: false,
          round: false,
        },
        {
          name: "서든어택",
          img: "/image/gameWorldcup/4.jpg",
          selected: false,
          round: false,
        },
        {
          name: "크레이지아케이드",
          img: "/image/gameWorldcup/5.jpg",
          selected: false,
          round: false,
        },
        {
          name: "카트라이더",
          img: "/image/gameWorldcup/6.jpg",
          selected: false,
          round: false,
        },
        {
          name: "던전앤파이터",
          img: "/image/gameWorldcup/7.jpg",
          selected: false,
          round: false,
        },
        {
          name: "바람의나라",
          img: "/image/gameWorldcup/8.jpg",
          selected: false,
          round: false,
        },
        {
          name: "마법학교 아스티넬",
          img: "/image/gameWorldcup/9.jpg",
          selected: false,
          round: false,
        },
        {
          name: "그랜드체이스",
          img: "/image/gameWorldcup/10.jpg",
          selected: false,
          round: false,
        },
        {
          name: "쥬니버 동물농장",
          img: "/image/gameWorldcup/11.jpg",
          selected: false,
          round: false,
        },
        {
          name: "디아블로2",
          img: "/image/gameWorldcup/12.jpg",
          selected: false,
          round: false,
        },
        {
          name: "테일즈런너",
          img: "/image/gameWorldcup/13.jpg",
          selected: false,
          round: false,
        },
        {
          name: "레이시티",
          img: "/image/gameWorldcup/14.jpg",
          selected: false,
          round: false,
        },
        {
          name: "월드오브워크래프트(와우)",
          img: "/image/gameWorldcup/15.jpg",
          selected: false,
          round: false,
        },
        {
          name: "거상",
          img: "/image/gameWorldcup/16.jpg",
          selected: false,
          round: false,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
  max-width: 100%;
  margin-top: 50px;
  border-radius: 100px 100px 100px 100px;
}
.vs {
  font-size: 2.2em;
  text-align: center;
  font-family: bz;
}

.vsvs {
  text-align: center;
  height: 100%;
}
.image {
  left: 30px;
  width: 90%;
  position: relative;
  z-index: 10;
}
.left,
.right {
  width: 100%;
  padding: 20px;
  position: relative;
}
.clickspace {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  z-index: 12;
}

.round {
  text-align: center;
  position: relative;
}
.vsimg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 11;
}

@font-face {
  font-family: "bz";
  src: url("/public/fonts/BMDOHYEON_ttf.ttf");
}
.BZ {
  position: absolute;
  font-family: "bz";
  font-size: 2.5em;
  left: 60px;
  /* text-align: center;
  text-justify: center; */
  color: rgb(255, 255, 255);
  z-index: 11;
}
</style>
