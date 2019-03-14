<template>
  <i class="fas fa-minus" @click="decrement"></i>
</template>

<script>
export default {
  methods: {
    decrement() {
      this.$emit('decrement')
    }
  }
}
</script>

<style lang="sass" scoped>
.fas
  display: block
  color: black
</style>
