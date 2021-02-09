<template>
  <div>
    <div v-if="isFake">
      <button @click="loadDati">Load dati</button>
    </div>
    <div class="box-macchine">
      <macchina :config="l180" :titolo="'L180'"></macchina>
      <macchina :config="l232" :titolo="'L232'"></macchina>
      <macchina :config="l2020" :titolo="'L2020'"></macchina>
    </div>
  </div>
</template>

<script>
import Macchina from '@/components/Macchina';
import { isFake } from '@/utils/ambiente';
import { mapGetters, mapActions } from 'vuex';
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
  width: 880px;
  height: 550px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
}
</style>
