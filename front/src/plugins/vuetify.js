import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueTyperPlugin from 'vue-typer'
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);

Vue.use(VueTyperPlugin)

Vue.use(Vuetify);



export default new Vuetify({
    global: {
        ripples: false
      },
      icons: {
        iconfont: 'mdi',
      },
      modules: [
        'vue-social-sharing/nuxt'
      ]
});
