<template>
    <v-card class="mb-3">
        <v-img contain height="100px" :src="getImg"></v-img>
        <!-- <v-card-text class="text-h4">{{ titolo }}</v-card-text> -->
    </v-card>
</template>

<script>
export default {
    name: 'TipoStallo',
    props: ['titolo'],
    data() {
        return {};
    },
    mounted() {},
    computed: {
        getImg: function () {
            let tipo = 'switch';
            if (this.titolo == 'Socket') {
                tipo = 'socket';
            }
            return require(`../assets/ciclatura/${tipo}.png`);
        }
    },
    methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
</style>
