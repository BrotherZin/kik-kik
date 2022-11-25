<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout column fill-height class="round">
        <div v-if="roundLength > 4" class="vs">
          남자 아이돌 이상형 월드컵 {{ roundLength }}강
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
        <div class="vsimg"><img src="/image/mansidealtype/vs.png" /></div>
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
        "/mansidealtypeEnd?name=" + selected.name + "&img=" + selected.img
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
          name: "TXT 수빈",
          img: "/image/mansidealtype/1.jpg",
          selected: false,
          round: false,
        },
        {
          name: "TXT 연준",
          img: "/image/mansidealtype/2.jpg",
          selected: false,
          round: false,
        },
        {
          name: "TXT 범규",
          img: "/image/mansidealtype/3.jpg",
          selected: false,
          round: false,
        },
        {
          name: "BTS 뷔",
          img: "/image/mansidealtype/4.jpg",
          selected: false,
          round: false,
        },
        {
          name: "ASTRO 차은우",
          img: "/image/mansidealtype/5.jpg",
          selected: false,
          round: false,
        },
        {
          name: "NCT 재현",
          img: "/image/mansidealtype/6.jpg",
          selected: false,
          round: false,
        },
        {
          name: "TXT 태현",
          img: "/image/mansidealtype/7.jpg",
          selected: false,
          round: false,
        },
        {
          name: "세븐틴 정한",
          img: "/image/mansidealtype/8.jpg",
          selected: false,
          round: false,
        },
        {
          name: "세븐틴 원우",
          img: "/image/mansidealtype/9.jpg",
          selected: false,
          round: false,
        },
        {
          name: "BTS 정국",
          img: "/image/mansidealtype/10.jpg",
          selected: false,
          round: false,
        },
        {
          name: "BTS 진",
          img: "/image/mansidealtype/11.jpg",
          selected: false,
          round: false,
        },
        {
          name: "NUEST 민현",
          img: "/image/mansidealtype/12.jpg",
          selected: false,
          round: false,
        },
        {
          name: "THE BOYZ 주연",
          img: "/image/mansidealtype/13.jpg",
          selected: false,
          round: false,
        },
        {
          name: "NCT 정우",
          img: "/image/mansidealtype/14.jpg",
          selected: false,
          round: false,
        },
        {
          name: "EXO 백현",
          img: "/image/mansidealtype/15.jpg",
          selected: false,
          round: false,
        },
        {
          name: "THE BOYZ 현재",
          img: "/image/mansidealtype/16.jpg",
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
  margin-top: 60px;
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
