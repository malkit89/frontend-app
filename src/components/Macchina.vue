<template>
  <div class="macchina">
    <div class="titolo">{{ titolo }}</div>
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
.macchina {
  /* border: 1px solid gray; */
  /* padding: 5px; */
  display: grid;
  grid-template-rows: 50px 1fr;
  row-gap: 5px;
}
.titolo {
  font-size: 2em;
  font-weight: bold;
  width: 100%;
  background: gray;
  margin: auto 0px;
}
.box-stalli {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}
</style>
