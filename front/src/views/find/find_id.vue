<template>
    <v-layout class="background" align-center justify-center>
      <div>
        <v-layout class="inside" align-center justify-center>
            <div>
            <v-text-field v-model="input.name" label="NAME"/>
            <v-text-field v-model="input.email" label="Email" maxlength="18"/>
                <div id="find">
                    <div class="btn">
                        <v-btn class="find-id" @click="findid">아이디 찾기</v-btn>
                        <v-btn class="cancel" @click="cancel">취소</v-btn>
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
                name: "",
                email: "",
            },
        };
    },
    methods:{
        findid() {
            if (this.input.name == "") {
            window.alert("이름을 입력하셔야 해요!");
            return;
            }
            if (this.input.email == "") {
            window.alert("이메일을 입력하셔야 해요!");
            return;
            }
  
          this.axios.post("/api/users/find_id", this.input).then((result) => {
          if (result.data.result == "ok") {
            window.alert("아이디는" + result.data.id + "입니다." + "다시 로그인을 해주세요!")
            this.$router.push("/Login");
          }
          if (result.data.result == "fail") {
            window.alert(result.data.message);
          }
        });
        },
        cancel(){
            this.$router.push("/");
        }
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