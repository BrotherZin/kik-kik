<template>
    <div class="header">
        <v-layout>
            <div class="kik">
            <a href="/"><img src="/image/logo.png">
                
                    <span class="logo" >KIK KIK</span>
                
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
    margin-left: 20px;
    transition: all ease 1s;
}
.kik{
    text-align: center;
  font-size: 70px;
  margin: 0;
  display: flex;
}
img:hover {
				transform: rotate( 45deg );
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
  font-family: 'Titan One', cursive;
  font-size: 80px;
  color: #FFF;
  text-shadow: 0 1px 0 #CCC,
               0 2px 0 #CCC,
               0 3px 0 #CCC,
               0 4px 0 #CCC,
               0 5px 0 #CCC,
               0 6px 0 transparent,
               0 7px 0 transparent,
               0 8px 0 transparent,
               0 9px 0 transparent,
               0 10px 10px rgba(#db469f 0%, #2188ff 100%);
}

span:nth-child(2) { animation-delay: .1s; }
span:nth-child(3) { animation-delay: .2s; }
span:nth-child(4) { animation-delay: .3s; }
span:nth-child(5) { animation-delay: .4s; }
span:nth-child(6) { animation-delay: .5s; }
span:nth-child(7) { animation-delay: .6s; }
span:nth-child(8) { animation-delay: .7s; }

@keyframes bounce {
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #CCC, 
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 #CCC,
                 0 7px 0 #CCC,
                 0 8px 0 #CCC,
                 0 9px 0 #CCC,
                 0 50px 25px rgba(#db469f 0%, #2188ff 100%);
  }
}
</style>