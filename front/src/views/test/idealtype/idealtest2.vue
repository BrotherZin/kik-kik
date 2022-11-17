<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <div>
          <div v-if="roundLength > 4">{{ roundLength }}강</div>
          <div v-else-if="roundLength == 4">준결승</div>
          <div v-else-if="roundLength == 2">결승</div>
          <v-layout class="wlsdk" align-center justify-center>
            <div @click="clickLeft" class="selectimg">
              <img :src="getLeftItem().img" alt="" />
            </div>
            <div class="vs">vs</div>
            <div @click="clickRight" class="selectimg">
              <img :src="getRightItem().img" alt="" />
            </div>
          </v-layout>
        </div>
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
          img: "/image/idealtype/iu2.png",
          selected: false,
          round: false,
        },
        {
          name: "카리나",
          img: "/image/idealtype/karina.png",
          selected: false,
          round: false,
        },
        {
          name: "윈터",
          img: "/image/idealtype/winter.png",
          selected: false,
          round: false,
        },
        {
          name: "민지",
          img: "/image/idealtype/minji.png",
          selected: false,
          round: false,
        },
        { name: "5", selected: false, round: false },
        { name: "6", selected: false, round: false },
        { name: "7", selected: false, round: false },
        { name: "8", selected: false, round: false },
        { name: "9", selected: false, round: false },
        { name: "10", selected: false, round: false },
        { name: "11", selected: false, round: false },
        { name: "12", selected: false, round: false },
        { name: "13", selected: false, round: false },
        { name: "14", selected: false, round: false },
        { name: "15", selected: false, round: false },
        { name: "16", selected: false, round: false },
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
