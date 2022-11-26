<template>
    <v-layout class="background" align-center justify-center>
      <div>
        <v-layout class="inside" fill-height align-center justify-center>
          <div class="form">
            <v-text-field v-model="form.id" label="아이디를 입력하세요!"></v-text-field>
            <v-text-field v-model="form.name" label="이름을 입력하세요!"></v-text-field>
            <v-text-field v-model="form.pw" type="password" label="패스워드를 입력해주세요!"></v-text-field>
            <v-text-field v-model="form.pwConfirm" type="password" label="패스워드 확인해주세요!"></v-text-field>
                <div id="email">
                <v-text-field v-model="form.email" label="이메일" maxlength="18" style="width:100px;"/>
                <div class="haha">@</div>
                <!-- <v-text-field id="email2" v-model="form.email" label="이메일2" maxlength="18"/> -->
                <select v-model="form.selected2">
                    <option v-for="(item, index) in selectList"
                    :key="index" :value="item.value">{{ item.name }}</option>
                </select>
                    <span>{{ selected2 }}</span>
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
        form: {
          id: "",
          name: "",
          pw: "",
          pwConfirm: "",
          email: "",
          selected2: "",
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
        if (this.form.id == "") {
        window.alert("아이디를 입력해주세요");
        return;
      }
      if (this.form.name == "") {
        window.alert("이름을 입력해주세요");
        return;
      }
      if (this.form.password.length < 8) {
        window.alert("패스워드는 8자 이상이어야 합니다");
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
    
  