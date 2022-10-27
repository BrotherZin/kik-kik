<template>
  <v-layout class="background">
    <div class="psychomain">
      <div class="psychomain-index">

        <img src="/image/psycho/main.png" class="image" />

      </div>
      <div class="psycho-title">
        <span> 쉿... 조심해...! [싸이코패스 테스트] </span>
      </div>
      <div class="psycho-input">
        <input type="text" name="name" placeholder="이름을 입력하세요" />
        <div class="psycho-button">
          <button class="custom-btn btn-7" v-on:click="psychobutton()"><span>시작하기 →</span></button>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: "Home",
  methods: {
     psychobutton() {
      this.$router.push("/PsychoTest1");
    },
  },
};
</script>
<style scoped lang="less">
.background{
  height: 100%;
  background-color: #E6E6FA
}

.psychomain {
  margin: auto;
  border-radius: 50px;
  text-align: center;
  background-color: white;
  width: 1400px;
  height: 940px;
}

.psychomain-index {
  padding: 30px;
}

.psychomain-index img {
  width: 800px;
  height: 400px;
  margin-bottom: 50px;
}

.psycho-title {
  font-size: 40px;
  margin-bottom: 20px;
}

input[type="text"] {
  width: 500px;
  height: 30px;
  font-size: 25px;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
}

.psycho-button {
  width: 90%;
  margin: auto;
  text-align: center;
}
button {
  margin: 20px;
}
.custom-btn {
  width: 520px;
  height: 45px;
  color: #000;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

.btn-7 {
  background: #c174df;
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-7 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-7:before,
.btn-7:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: rgba(251, 75, 2, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.btn-7:before {
  height: 0%;
  width: 2px;
}
.btn-7:after {
  width: 0%;
  height: 2px;
}
.btn-7:hover {
  color: rgba(251, 75, 2, 1);
  background: transparent;
}
.btn-7:hover:before {
  height: 100%;
}
.btn-7:hover:after {
  width: 100%;
}
.btn-7 span:before,
.btn-7 span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: rgba(251, 75, 2, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.btn-7 span:before {
  width: 2px;
  height: 0%;
}
.btn-7 span:after {
  height: 2px;
  width: 0%;
}
.btn-7 span:hover:before {
  height: 100%;
}
.btn-7 span:hover:after {
  width: 100%;
}
.image {
  width: auto;
  height: auto;
  max-width: 500px;
  max-height: 500px;
}
</style>