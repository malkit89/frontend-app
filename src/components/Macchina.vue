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

        <!-- Tolto la divisione colonne per tipo di prodotto perchè non tutte le macchine hanno numeri uguali di stalli prese e switch, questo crea layout non uniformi  -->
        <!-- Tipo prodotto 2 colonne -->
        <!-- <v-row>
            <v-col cols="6">
                <tipo-stallo :titolo="tipo1"></tipo-stallo>
            </v-col>
            <v-col cols="6">
                <tipo-stallo :titolo="tipo2"></tipo-stallo>
            </v-col>
        </v-row> -->
        <!-- Box stalli 1 colonna -->
        <v-row>
            <v-col>
                <!-- Lista stalli con 2 colonne per riga -->
                <!-- class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" -->
                <v-row>
                    <v-col
                        v-for="(stallo, index) in config"
                        :key="index"
                        class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
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
    computed: {},
    methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
