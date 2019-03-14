<template>
  <i class="fas fa-plus" @click="increment"></i>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$emit('increment')
    }
  }
}
</script>

<style lang="sass" scoped>
.fas
  display: block
  color: black
</style>
