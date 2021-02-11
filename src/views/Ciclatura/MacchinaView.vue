<template>
    <div>
        <div class="container">
            <v-row v-if="isFake">
                <v-col cols="12">
                    <v-btn @click="loadDati" class="primary"
                        >Load fake dati</v-btn
                    >
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="3">
                    <macchina
                        :config="l180"
                        :titolo="'L180'"
                        :tipo1="'Socket'"
                        :tipo2="'Switch'"
                    ></macchina>
                </v-col>
                <v-col cols="3">
                    <macchina
                        :config="l232"
                        :titolo="'L232'"
                        :tipo1="'Socket'"
                        :tipo2="'Switch'"
                    ></macchina>
                </v-col>
                <v-col cols="3">
                    <macchina
                        :config="l2020"
                        :titolo="'L2020'"
                        :tipo1="'Switch'"
                        :tipo2="'Switch'"
                    ></macchina>
                </v-col>
                <v-col cols="3">
                    <macchina
                        :titolo="'L2021'"
                        :tipo1="'Socket'"
                        :tipo2="'Socket'"
                    ></macchina>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import Macchina from '@/components/Macchina';
import { isFake } from '@/utils/ambiente';
import { mapGetters, mapActions } from 'vuex';
import CiclaturaConfig from '@/configs/ciclatura.js';

export default {
    name: 'MacchinaView',
    components: {
        macchina: Macchina
    },
    data() {
        return {
            isFake: false
        };
    },
    mounted() {
        this.isFake = isFake();
        this.loadDati();
        setInterval(() => {
            this.loadDati();
        }, CiclaturaConfig.INTERVALLO_CHECK);
    },
    computed: {
        ...mapGetters({
            l180: 'Ciclatura/getL180',
            l232: 'Ciclatura/getL232',
            l2020: 'Ciclatura/getL2020'
        })
    },
    methods: {
        ...mapActions({
            loadDati: 'Ciclatura/loadDati'
        })
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-macchine {
    display: grid;
    /* width: 880px; */
    /* height: 540px; */
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
    gap: 20px;
}
</style>
