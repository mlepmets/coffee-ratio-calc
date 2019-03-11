<template>
  <div class="container">
    <div class="element">
      <div class="display">
        <i class="fas fa-minus" @click="decrementItem"></i>
        <input type="number" id="brew" v-on:input="calculate" v-model="ingredientAmount">
        <i class="fas fa-plus" @click="incrementItem"></i>
      </div>
      <div class="units">resulting coffee (ml)</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ingName: {
      type: String,
      required: true
    },
    ingValue: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      ingredientAmount: this.ingValue
    }
  },
  methods: {},
  watch: {},
  computed: {}
}
</script>
<style lang="sass">

</style>
