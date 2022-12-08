import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
// import Search from './components/Search2.js'

Vue.config.productionTip = false
// Vue.use(Search)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


