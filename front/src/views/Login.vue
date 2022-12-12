<template>
  <v-layout class="background" align-center justify-center>
    <div>
      <v-layout class="inside" align-center justify-center>
          <div>
          <v-text-field v-model="input.id" label="ID"/>
          <v-text-field v-model="input.password" label="PW"/>
              <div id="find">
                  <v-btn class="Login" @click="login">로그인</v-btn>
                  <div class="btn">
                      <v-btn class="find-id" @click="find">아이디 찾기</v-btn><br>
                      <v-btn class="find-pw" @click="find">비밀번호 찾기</v-btn>
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
              password: "",
          },
      };
  },
  methods:{
      login() {
          if (this.input.id == "") {
          window.alert("아이디를 입력하셔야 해요!");
          return;
          }
          if (this.input.password == "") {
          window.alert("비밀번호를 입력하셔야 해요!");
          return;
          }
          this.axios.post("/api/users/login",this.input)
          .then(result=>{
              // if(result.data.result){
              //     window.alert("로그인 성공!");
              //     this.$router.push("/main");
              // }else{
              //     window.alert("로그인 실패!");
              // }
          })
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