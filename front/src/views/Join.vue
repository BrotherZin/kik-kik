<template>
    <v-layout class="background" align-center justify-center>
      <div>
        <v-layout class="inside" fill-height align-center justify-center>
          <div class="form">
            <v-text-field v-model="input.id" label="ID"></v-text-field>
            <v-text-field v-model="input.name" label="NAME"></v-text-field>
            <v-text-field v-model="input.pw" type="password" label="PW"></v-text-field>
            <v-text-field v-model="input.pwConfirm" type="password" label="Confirm PW"></v-text-field>
                <div id="email">
                <v-text-field v-model="input.email" label="Email" maxlength="18" style="width:100px;"/>
                <div class="haha">@</div>
                <!-- <v-text-field id="email2" v-model="form.email" label="이메일2" maxlength="18"/> -->
                <select v-model="input.selected">
                    <option v-for="(item, index) in selectList"
                    :key="index" :value="item.value">{{ item.name }}</option>
                </select>
                    <span>{{ selected }}</span>
                    <v-snackbar v-model="snackbarFlag" :timeout="timeout">{{ text }}</v-snackbar>
                </div>
            <v-btn @click="join">가입하기</v-btn>
            <v-btn class="cancel" @click="Cancel">취소하기</v-btn>
          </div>
        </v-layout>
      </div>
    </v-layout>
  </template>
    
    <script>
  export default {
    name: "Join",
    data() {
      return {
        input: {
          id: "",
          name: "",
          pw: "",
          pwConfirm: "",
          email: "",
          selected: "",
        },
        selectList: [
          { name: "naver.com", value: "naver.com" },
          { name: "gmail.com", value: "gmail.com" },
          { name: "hanmail.net", value: "hanmail.net" },
          { name: "nate.com", value: "nate.com" },
          { name: "daum.net", value: "daum.net" },
          { name: "직접입력", value: "직접입력" },
        ],
      };
    },
    methods: {
      join() {
        if (this.input.id == "") {
        window.alert("아이디를 입력해주세요");
        return;
      }
      if (this.input.name == "") {
        window.alert("이름을 입력해주세요");
        return;
      }
      if (this.form.password != this.form.passwordConfirm) {
        window.alert("패스워드가 일치하지 않습니다");
        return;
      }
      if (this.form.email == "") {
        window.alert("이메일을 입력해주세요");
        return;
      }
        },
      Cancel() {
        this.$router.push("/");
      },
    },
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
  #email{
    display: flex;
    flex-direction: row;
  }
  select{
    border-bottom: 1px solid black;
    width:110px;
    height: 49px;
    margin-left:5px;
  }
  .haha{
    margin-top:20px;
  }
  .cancel{
    margin-left: 45px;
  }
  </style>
    
  