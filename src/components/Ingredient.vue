<template>
  <div class="element">
    <div class="display">
      <i class="fas fa-minus" @touchend="emitDecrementedValue"></i>
      <input ref="inputField" type="number" :id="id" :value="value" @change="emitValueChanged">
      <i class="fas fa-plus" @touchend="emitIcrementedValue"></i>
    </div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Ingredient extends Vue {
  @Prop() private id!: string
  @Prop() private value!: number
  @Prop() private description!: string

  @Emit('new-value')
  private emitValueChanged(event: Event) {
    const eventTarget = event.target as HTMLInputElement
    return {
      id: this.id,
      value: eventTarget.value
    }
  }
  @Emit('new-value')
  private emitDecrementedValue() {
    const decrementedValue = this.value - 1
    return {
      id: this.id,
      value: decrementedValue
    }
  }
  @Emit('new-value')
  private emitIcrementedValue() {
    const icrementedValue = this.value + 1
    return {
      id: this.id,
      value: icrementedValue
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.description
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
  visibility: none

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
i
  display: block

// Media queries
@media screen and (max-width: 1200px)
  input
    width: 40vw
    font-size: 12vw
  .description
    font-size: 2.5vw

@media screen and (max-width: 500px)
  #app
    margin-top: 1vh
  .display
    justify-content: center
  .fas
    display: block
    scolor: black
    visibility: visible
  input
    width: 70vw
    font-size: 17vw
    height: 19vw

  .description
    font-size: 4vw
    bottom: 10px
</style>