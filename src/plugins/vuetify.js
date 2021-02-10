import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import it from 'vuetify/lib/locale/it';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { it },
        current: 'it',
    },
    theme: {
        themes: {
            light: {
                primary: '#ffb74d',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
});
