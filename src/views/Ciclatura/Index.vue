<template>
  <div>
    <h3>Ciclatura {{ dati }}</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Ciclatura',
  data() {
    return {};
  },
  mounted() {
    this.loadDati();
  },
  computed: {
    ...mapGetters({
      dati: 'Ciclatura/getDati'
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
<style scoped></style>
