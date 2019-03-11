<template>
  <div class="container">
    <div class="element">
      <div class="display">
        <i class="fas fa-minus" @click="decrementItem"></i>
        <input type="number" id="brew" v-on:input="calculate" v-model="resultingCoffeeAmount">
        <i class="fas fa-plus" @click="incrementItem"></i>
      </div>
      <div class="units">resulting coffee (ml)</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {},
  watch: {},
  computed: {}
}
</script>
<style lang="sass">

</style>
