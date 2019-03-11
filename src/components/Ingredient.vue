<template>
  <div class="element">
    <div class="display">
      <i class="fas fa-minus" @click="decrementItem"></i>
      <input
        type="number"
        :id="name"
        v-on:input="calculate"
        v-model="this.ingredientValue"
      />
      <i class="fas fa-plus" @click="incrementItem"></i>
    </div>
    <div class="units">{{ units }}</div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    val: {
      type: Number,
      required: true
    },
    units: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      ingredientName: this.name,
      ingredientValue: this.val
    }
  },
  methods: {},
  watch: {},
  computed: {}
}
</script>
<style lang="sass">

.element
  display: inline
  width: 20vw
.units
  position: relative
  bottom: 15px
  left: 0px
  font-family: 'Roboto'
  font-size: 1.5vw
  font-weight: 700
  color: gray

input
  background: none
  outline: none
  border: none
  width: 20vw
  display: block
  text-align: center
  vertical-align: center
  font-weight: bold
  font-size: 8vw
  padding: none
  font-family: 'Roboto'
  font-weight: 400
.fas
  color: black
  display: none
.display
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  align-items: center
#brew
  color: #6f4e37
#water
  color: #64dbfc
#grounds
  color: #473223
#ratio
  color: #666

h1
  font-size: 5vw
  font-weight: 400
  margin-top: 0
p
  font-size: 2vw
  font-family: 'Roboto'
  font-weight: 400

// Chrome spin buttons
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
  -webkit-appearance: none;
  margin: 0;

// Mozilla spin buttons and focus
input[type=number]
  -moz-appearance: textfield
input:invalid
  box-shadow: none


// Media queries
@media screen and (max-width: 1200px)
  .container
    flex-wrap: wrap
    margin-top: 5vh
  .element
    width: 40vw
  input
    width: 40vw
    font-size: 12vw
  .units
    font-size: 2.5vw
  h1
    font-size: 7vw
  p
    font-size: 3vw
@media screen and (max-width: 500px)
  #app
    margin-top: 1vh
  .container
    flex-wrap: wrap
    margin-top: 0
  .element
    width: 90vw
  .display
    justify-content: center
  .fas
    display: block
  input
    width: 70vw
    font-size: 17vw
    height: 19vw

  .units
    font-size: 4vw
    bottom: 10px
  h1
    font-size: 12vw
    margin-bottom: 0
  p
    font-size: 5vw
    margin-top: 0
</style>
