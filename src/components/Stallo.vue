<template>
    <v-card
        class="stallo"
        @click="handleClik"
        ref="stallo"
        v-bind:color="classeStato"
    >
        <v-card-text class="text-h4">{{ params.nome }}</v-card-text>
    </v-card>
</template>

<script>
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
            let stato = this.params.stato;
            let classe = stato.replace(' ', '_').toLowerCase();
            //  Coloro solo in caso di errore
            if (classe != 'error') {
                classe = '';
            }
            return classe;
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
    height: 100px;
    // width: 100px;
}
.error {
    background-color: $error !important;
}
.waiting {
    background-color: $waiting !important;
}
.end_ok {
    background-color: $end_ok !important;
}
.manual_stop {
    background-color: $manual_stop !important;
}
.in_progress {
    background-color: $in_progress !important;
}
.safety_block {
    background-color: $safety_block !important;
}
.ready {
    background-color: $ready !important;
}
</style>
