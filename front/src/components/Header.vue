<template>
    <div class="header">
        <v-layout>
            <div class="kik">
            <a href="/">
                    <img class="one" src="/image/logo.png">
                    <span class="logo" >KIK KIK</span>
                    <img class="two" src="/image/logo.png">
            </a>
        </div>
            <v-spacer></v-spacer>
        </v-layout>
    </div>
</template>

<script>

export default{
    mounted(){
       


    }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap');
*{
    font-family: 'Yeon Sung', cursive;
}
    .header{
        position: sticky;
        top: 0px; 
        background-color: white;
        z-index: 11;
        box-shadow: 0 5px 5px 0 grey;
    }
    .header .logo{
        font-size:60px;
        text-align: center;
        font-weight: bold;
    }
    .logo{
    color: black;
    text-decoration: none;
    scroll-behavior: smooth;
}
a{
    text-decoration: none;
}
img{
    width: 80px;
    height: 80px;
    vertical-align: middle;
    transition: all ease 1s;
}
.kik{
    text-align: center;
  font-size: 70px;
  margin: 0;
  display: flex;
}
.one:hover {
				transform: rotate( 180deg );
			}
            .two:hover {
                transform: rotate( -180deg );
            }
            .one{
                margin-left:40px;
            }
            .two{
                margin-left:10px;
            }
.logo {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size:50px;
    margin-left:10px;
}
span:hover{
  position: relative;
  top: 20px;
  display: inline-block;
  animation: bounce .3s ease infinite alternate;
  font-size: 80px;
  color: #FFF;
  text-shadow:
               0 10px 10px rgba(#db469f 0%, #2188ff 100%);
}

@keyframes bounce {
  100% {
    top: -20px;
    text-shadow:
                 0 50px 25px rgba(#db469f 0%, #2188ff 100%);
  }
}
</style>