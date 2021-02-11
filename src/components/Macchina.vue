<template>
    <div>
        <v-card class="mb-2 light-green lighten-3">
            <v-card-text class="text-center text-h4">{{ titolo }}</v-card-text>
        </v-card>
        <div class="box-stalli">
            <stallo
                v-for="(stallo, index) in config"
                :key="index"
                :params="stallo"
            ></stallo>
        </div>
    </div>
</template>

<script>
import Stallo from './Stallo';
export default {
    name: 'Macchina',
    components: {
        stallo: Stallo
    },
    props: ['config', 'titolo'],
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
.box-stalli {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
}
</style>
