<template>
    <div class="header">
        <v-layout>
            <div class="kik">
            <a href="/"><img src="/image/logo.png"><span class="logo" >KIK KIK</span></a>
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
    .header{
        position: sticky;
        top: 0px; 
        background-color: white;
        z-index: 11;
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
</style>