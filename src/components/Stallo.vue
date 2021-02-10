<template>
    <div
        v-bind:class="['stallo', classeStato]"
        @click="handleClik"
        ref="stallo"
    >
        {{ params.nome }} - {{ params.stato }}
    </div>
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
        classeStato: function () {
            let stato = this.params.stato;
            let classe = stato.replace(' ', '_').toLowerCase();
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
}
.error {
    background-color: $error;
}
.waiting {
    background-color: $waiting;
}
.end_ok {
    background-color: $end_ok;
}
.manual_stop {
    background-color: $manual_stop;
}
.in_progress {
    background-color: $in_progress;
}
.safety_block {
    background-color: $safety_block;
}
.ready {
    background-color: $ready;
}
</style>
