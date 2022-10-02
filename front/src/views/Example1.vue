<template>
  <v-layout class="background" align-center justify-center>
    <div class="inside">
      <v-layout align-center justify-center>
        <h1>아이돌 이상형 월드컵 8강</h1>
      </v-layout>
    </div>
  </v-layout>
</template>
    
    <script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  methods: {
    testStart() {
      this.$router.push("/alltest");
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
</style>
    