import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);



export default new Vuetify({
    global: {
        ripples: false
      },
      icons: {
        iconfont: 'mdi',
      },
});
