<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <div class="round">
        <div v-if="roundLength > 4" class="vs">
          이상형 월드컵 {{ roundLength }}강
        </div>
        <div v-else-if="roundLength == 4" class="vs">준결승</div>
        <div v-else-if="roundLength == 2" class="vs">결승</div>
      </div>
      <div class="wlsdk">
        <div class="vsvs">
          <div @click="clickLeft" class="selectimg">
            <img class="left" :src="getLeftItem().img" alt="" />
          </div>

          <div @click="clickRight" class="selectimg">
            <img class="right" :src="getRightItem().img" alt="" />
          </div>
        </div>
      </div>
      <div class="vsimg"><img src="/image/idealtype/vs.png" /></div>
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
      this.$router.push("/idealtypeEnd");
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
          name: "아이유",
          img: "/image/idealtype/iu.jpg",
          selected: false,
          round: false,
        },
        {
          name: "카리나",
          img: "/image/idealtype/karina.jpg",
          selected: false,
          round: false,
        },
        {
          name: "윈터",
          img: "/image/idealtype/winter.jpg",
          selected: false,
          round: false,
        },
        {
          name: "민지",
          img: "/image/idealtype/minji.jpg",
          selected: false,
          round: false,
        },
        {
          name: "채원",
          img: "/image/idealtype/chaewon.jpg",
          selected: false,
          round: false,
        },
        {
          name: "다현",
          img: "/image/idealtype/dahyeon.jpg",
          selected: false,
          round: false,
        },
        {
          name: "송하영",
          img: "/image/idealtype/hayoung.jpg",
          selected: false,
          round: false,
        },
        {
          name: "제니",
          img: "/image/idealtype/jeni.jpg",
          selected: false,
          round: false,
        },
        {
          name: "지수",
          img: "/image/idealtype/jisu.jpg",
          selected: false,
          round: false,
        },
        {
          name: "수지",
          img: "/image/idealtype/suji.jpg",
          selected: false,
          round: false,
        },
        {
          name: "태연",
          img: "/image/idealtype/taeyeon.jpg",
          selected: false,
          round: false,
        },
        {
          name: "안유진",
          img: "/image/idealtype/ujin.jpg",
          selected: false,
          round: false,
        },
        {
          name: "예지",
          img: "/image/idealtype/yeji.jpg",
          selected: false,
          round: false,
        },
        {
          name: "장원영",
          img: "/image/idealtype/wonyoung.jpg",
          selected: false,
          round: false,
        },
        {
          name: "최예나",
          img: "/image/idealtype/yena.jpg",
          selected: false,
          round: false,
        },
        {
          name: "우기",
          img: "/image/idealtype/woogi.jpg",
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
  margin-top: 50px;
  border-radius: 100px 100px 100px 100px;
}
.vs {
  font-size: 2.2em;
  font-weight: bold;
  text-align: center;
}

.vsvs {
  display: flex;
  text-align: center;
}
img {
  height: 500px;
  width: 500px;
}
.left {
  margin-top: 100px;
  margin-left: 150px;
}
.right {
  margin-top: 100px;
  margin-left: 600px;
}
.round {
  text-align: center;
}
</style>
