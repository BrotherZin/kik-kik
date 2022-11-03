<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <div>
          <h1>아이돌 이상형 월드컵 {{ round }}강 {{ step }}번째 라운드</h1>
        </div>
      </v-layout>
      <v-layout align-center justify-center>
        <v-flex xs6 @click="selectideal(getLeft())"> {{ getLeft() }} </v-flex>
        <div class="vs">vs</div>
        <v-flex xs6 @click="selectideal(getRight())"> {{ getRight() }}</v-flex>
      </v-layout>
    </div>
  </v-layout>
</template>

<script>
import _ from "underscore";

export default {
  data() {
    return {
      step: 1,
      round: 4,
      list: [
        {
          name: "아이유",
          img: "/image/idealtype/iu2.png",
          selected: false,
        },
        {
          title: "카리나",
          img: "/image/idealtype/karina.png",
          selected: false,
        },
        {
          title: "윈터",
          img: "/image/idealtype/winter.png",
          selected: false,
        },
        {
          title: "민지",
          img: "/image/idealtype/minji.png",
          selected: false,
        },
      ],
    };
  },
  methods: {
    selectideal(item) {
      item.selected = true;
      if (this.step == this.round / 2) {
        this.step = 1;
        this.round = this.round / 2;
      } else {
        this.step++;
      }
      if (this.round == 1) {
        console.log("final");
        var finalList = this.getSelected();
        var finalItem = _.first(finalList);
        console.log(finalItem);
      }
    },
    getLeft() {
      var selectedList = this.getSelected();
      console.log(selectedList, Math.floor(this.step / 2));
      return selectedList[Math.floor(this.step / 2)];
    },
    getRight() {
      var selectedList = this.getSelected();
      return selectedList[Math.floor(this.step / 2) + 1];
    },
    getSelected() {
      if (this.round == this.list.length) {
        return this.list;
      }
      return _.chain(this.list)
        .map((item) => {
          if (item.selected) {
            return item;
          }
        })
        .compact()
        .value();
    },
  },
};
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
</style>