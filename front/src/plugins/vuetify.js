import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueTyperPlugin from 'vue-typer'

Vue.use(VueTyperPlugin)

Vue.use(Vuetify);



export default new Vuetify({
    global: {
        ripples: false
      },
      icons: {
        iconfont: 'mdi',
      },
});
