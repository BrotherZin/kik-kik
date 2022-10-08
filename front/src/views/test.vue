<template>
  <div>
    <div>아이돌 이상형 월드컵 {{ round }}강 {{ step }}번째 라운드</div>
    <v-layout>
      <v-flex xs6 @click="selectItem(getLeft())">
        {{ getLeft() }}
      </v-flex>
      <v-flex xs6 @click="selectItem(getRight())">
        {{ getRight() }}
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import _ from "underscore";
export default {
  data() {
    return {
      step: 1,
      round: 8,
      list: [
        {
          title: "test1",
          selected: false,
        },
        {
          title: "test2",
          selected: false,
        },
        {
          title: "test3",
          selected: false,
        },
        {
          title: "test4",
          selected: false,
        },
        {
          title: "test5",
          selected: false,
        },
        {
          title: "test6",
          selected: false,
        },
        {
          title: "test7",
          selected: false,
        },
        {
          title: "test8",
          selected: false,
        },
      ],
    };
  },
  methods: {
    getLeft() {
      var selectedList = this.getSelected();
      console.log(selectedList, Math.floor(this.step / 2));
      return selectedList[Math.floor(this.step / 2)];
    },
    getRight() {
      var selectedList = this.getSelected();
      return selectedList[Math.floor(this.step / 2) + 1];
    },
    selectItem(item) {
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
</style>