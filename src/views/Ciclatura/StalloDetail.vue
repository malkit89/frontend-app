<template>
    <div>
        <div>
            <ul>
                <li>Macchina: {{ dati.macchina }}</li>
                <li>Nome: {{ dati.nome }}</li>
                <li>tecnico: {{ dati.tecnico }}</li>
                <li>prova: {{ dati.prova }}</li>
                <li>stato: {{ dati.stato }}</li>
                <li>start: {{ dati.start }}</li>
                <li>end: {{ dati.end }}</li>
                <li>timestamp: {{ dati.timestamp }}</li>
                <li>Tipo: {{ dati.tipo }}</li>
            </ul>
        </div>
        <button @click="goBack">Back</button>
    </div>
</template>

<script>
export default {
    name: 'StalloDetail',
    props: [],
    components: {},
    data() {
        return {};
    },
    mounted() {},
    computed: {
        dati(state) {
            return this.$route.params;
        }
    },
    methods: {
        goBack: function () {
            this.$router.push({ name: 'macchina' });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style: none;
    text-align: start;
}
</style>
