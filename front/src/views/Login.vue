<template>
  <v-layout class="background" align-center justify-center>
    <div>
      <v-layout class="inside" align-center justify-center>
          <div>
          <v-text-field v-model="input.id" label="ID"/>
          <v-text-field v-model="input.pw" label="PW"/>
              <div id="find">
                  <v-btn class="Login" @click="Login">로그인</v-btn>
                  <div class="btn">
                      <v-btn class="find-id" @click="findid">아이디 찾기</v-btn><br>
                      <v-btn class="find-pw" @click="findpw">비밀번호 찾기</v-btn>
                  </div>
              </div>
          </div>
      </v-layout>
    </div>
  </v-layout>
</template>
  
  <script>
export default {
  data() {
      return {
          input: {
              id: "",
              pw: "",
          },
      };
  },
  methods:{
      Login() {
          if (this.input.id == "") {
          window.alert("아이디를 입력하셔야 해요!");
          return;
          }
          if (this.input.pw == "") {
          window.alert("비밀번호를 입력하셔야 해요!");
          return;
          }

        this.axios.post("/api/users/login", this.input).then((result) => {
        if (result.data.result == "ok") {
          window.alert("로그인이 완료되었습니다! 즐거운 테스트 하세요~!")
          this.$router.push("/");
        }
        if (result.data.result == "fail") {
          window.alert(result.data.message);
        }
      });
      },
      findid() {
        this.$router.push("/find_id");
      },
      findpw() {
        this.$router.push("/find_pw");
      },
  }
};
</script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200&display=swap');
  *{
    font-family: 'Noto Serif KR', serif;
    font-weight: bold;
  }
.background {
  height: 100%;
  background-color: #e6e6fa;
  display: grid;
}
.inside {
  background-color: white;
  width: 1200px;
  height: 750px;
  margin-top: 50px;
  border-radius: 100px 100px 100px 100px;
}
#find{
  display: flex;
}
.find-pw{
  margin-top: 20px;
  margin-left: 20px;
}
.find-id{
  margin-left:34px;
}
</style>