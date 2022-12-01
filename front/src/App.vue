<template>
  <v-app>
    <app-header></app-header>
    <router-view/>
  </v-app>

</template>

<script>
import AppHeader from "@/components/Header"

export default {
  name: 'App',
  components:{
    AppHeader
  },

  data: () => ({
    //
  }),
};
</script>
<style >

</style>