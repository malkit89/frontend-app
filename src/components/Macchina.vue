<template>
    <div>
        <!-- Titolo macchina 1 colonna-->
        <v-row no-gutters>
            <v-col cols="12">
                <v-card class="mb-2 light-green lighten-3">
                    <v-card-text class="text-center text-h4">{{
                        titolo
                    }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Box stalli 1 colonna -->
        <v-row>
            <v-col>
                <!-- Lista stalli con 2 colonne per riga -->
                <v-row>
                    <v-col
                        v-for="(stallo, index) in config"
                        :key="index"
                        :cols="sizeCols"
                    >
                        <v-spacer></v-spacer>
                        <stallo :params="stallo"></stallo>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Stallo from './Stallo.vue';
// import TipoStallo from './TipoStallo.vue';
export default {
    name: 'Macchina',
    components: {
        stallo: Stallo
        // tipoStallo: TipoStallo
    },
    props: ['config', 'titolo', 'tipo1', 'tipo2'],
    data() {
        return {};
    },
    mounted() {},
    computed: {
        //  Size della colonna Stallo
        sizeCols: function () {
            let result = 6;
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    result = 6;
                    break;
                case 'sm':
                    result = 6;
                    break;
                case 'md':
                    result = 6;
                    break;
                case 'lg':
                    result = 6;
                    break;
                case 'xl':
                    result = 6;
                    break;
            }
            return result;
        }
    },
    methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
