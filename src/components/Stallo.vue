<template>
  <div class="stallo" @click="handleClik" ref="stallo">
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
  mounted() {
    // console.log(this.params.stato);
    let stato = this.params.stato;
    let classe = stato.replace(' ', '_').toLowerCase();
    this.$refs.stallo.classList.add(classe);
  },
  computed: {},
  methods: {
    handleClik: function() {
      this.$router.push({ name: 'detail', params: this.params });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stallo {
  border: 1px solid gray;
}
.error {
  background-color: #ff2010;
}
.waiting {
  background-color: #dcd5d5;
}
.end_ok {
  background-color: #25fd25;
}
.manual_stop {
  background-color: orange;
}
.in_progress {
  background-color: yellow;
}
.safety_block {
  background-color: #d657ec;
}
.ready {
  background-color: #00bcd4;
}
</style>
