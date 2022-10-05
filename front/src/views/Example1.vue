<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <div>
          <h1>아이돌 이상형 월드컵 [ 8강 1/4 ]</h1>
        </div>
      </v-layout>
      <v-layout align-center justify-center>
        <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="@/image/winter.png" class="image" @click="NextPage" />
        </div>
        <div class="vs">vs</div>
        <div style="display: block; margin: auto; width: auto; height: auto">
          <img src="@/image/iu2.png" class="image" @click="NextPage" />
        </div>
      </v-layout>
    </div>
  </v-layout>
</template>
    
    <script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  methods: {
    NextPage() {
      this.$router.push("/exampleEnd");
    },
  },

  components: {
    HelloWorld,
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
  height: 750px;
  margin-top: 50px;
  border-radius: 100px 100px 100px 100px;
}
.image {
  width: auto;
  height: auto;
  max-width: 500px;
  max-height: 500px;
}
.vs {
  font-size: 2.2em;
  font-weight: bold;
}
</style>
    