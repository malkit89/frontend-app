<template>
    <v-card class="stallo" @click="handleClik" ref="stallo">
        <v-list v-bind:color="classeStato">
            <v-list-item>
                <v-list-item-avatar tile>
                    <v-img :src="imgTipo"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="text-h4">{{
                        params.nome
                    }}</v-list-item-title>

                    <v-list-item-subtitle class="">{{
                        params.stato
                    }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
import { STATI_STALLI } from '@/store/ciclatura_module.js';
export default {
    name: 'Stallo',
    props: ['params'],
    data() {
        return {};
    },
    mounted() {},
    computed: {
        //  Restituisce la classe per impostare colore dello stallo
        classeStato: function () {
            let result = 'vuoto';
            let classe = this.params.stato;
            const fermo = [
                STATI_STALLI.ERROR,
                STATI_STALLI.SAFETY_BLOCK,
                STATI_STALLI.MANUAL_STOP
            ];
            //  Coloro di rosso in caso di fermo
            if (fermo.includes(classe)) {
                result = 'errore';
            }
            //  Coloro di giallo se è in progress
            if (classe == STATI_STALLI.IN_PROGRESS) {
                result = 'in_progress';
            }
            //  In tutti gli altri casi lo stallo è colorato di bianco
            return result;
        },
        imgTipo: function () {
            if (this.params.tipo == 'Socket') {
                return require('../assets/ciclatura/icon_socket.png');
            }
            return require('../assets/ciclatura/icon_switch.png');
        }
    },
    methods: {
        handleClik: function () {
            this.$router.push({ name: 'detail', params: this.params });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '@/sass/colori';

.stallo {
    border: 1px solid gray;
    // height: 100px;
    // width: 200px;
}
.vuoto {
    background-color: white !important;
}
.errore {
    background-color: $error !important;
}
.in_progress {
    background-color: $in_progress !important;
    // background-color: $ready !important;
}

.waiting {
    // background-color: $waiting !important;
    background-color: $ready !important;
}
.end_ok {
    background-color: $end_ok !important;
}
.manual_stop {
    // background-color: $manual_stop !important;
    background-color: $error !important;
}
.safety_block {
    // background-color: $safety_block !important;
    background-color: $error !important;
}
.ready {
    background-color: $ready !important;
}
</style>
