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
                <v-col
                    :cols="sizeCols"
                    v-for="(macchina, pos) in macchine"
                    :key="pos"
                >
                    <macchina
                        :config="macchina.config"
                        :titolo="macchina.titolo"
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
            isFake: false,
            macchine: []
        };
    },
    mounted() {
        this.isFake = isFake();
        this.caricaDati();
        setInterval(() => {
            this.caricaDati();
        }, CiclaturaConfig.INTERVALLO_CHECK);
    },
    computed: {
        //  Size della colonna Macchina
        sizeCols: function () {
            let result = 6;
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    result = 12;
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
                    result = 3;
                    break;
            }
            return result;
        },
        ...mapGetters({
            l180: 'Ciclatura/getL180',
            l232: 'Ciclatura/getL232',
            l2020: 'Ciclatura/getL2020'
        })
    },
    methods: {
        ...mapActions({
            loadDati: 'Ciclatura/loadDati'
        }),
        async caricaDati() {
            await this.loadDati();
            this.macchine = [
                {
                    config: this.l180,
                    titolo: 'L180'
                },
                {
                    config: this.l232,
                    titolo: 'L232'
                },
                {
                    config: this.l2020,
                    titolo: 'L2020'
                },
                {
                    config: this.l180,
                    titolo: 'L2021'
                }
            ];
        }
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
