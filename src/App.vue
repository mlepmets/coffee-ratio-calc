<template>
  <div id="app">
    <header>
      <h1>Coffee Ratio Calculator</h1>
      <p>Calculate how much grounds to use for your cup of coffee.</p>
    </header>
    <main>
      <div class="container">
        <div class="element">
          <div class="display">
            <i class="fas fa-minus" @click="decrementItem"></i>
            <input type="number" id="brew" v-on:input="calculate" v-model="resultingCoffeeAmount">
            <i class="fas fa-plus" @click="incrementItem"></i>
          </div>
          <div class="units">resulting coffee (ml)</div>
        </div>
        <div class="element">
          <div class="display">
            <i class="fas fa-minus"></i>
            <input type="number" id="water" v-on:input="calculate" v-model="waterAmount">
            <i class="fas fa-plus"></i>
          </div>
          <div class="units">water (ml)</div>
        </div>
        <div class="element">
          <div class="display">
            <i class="fas fa-minus"></i>
            <input type="number" id="grounds" v-on:input="calculate" v-model="coffeeGroundsAmount">
            <i class="fas fa-plus"></i>
          </div>
          <div class="units">grounds (g)</div>
        </div>
        <div class="element">
          <div class="display">
            <i class="fas fa-minus"></i>
            <input type="number" id="ratio" v-on:input="calculate" v-model="coffeeToWaterRatio">
            <i class="fas fa-plus"></i>
          </div>
          <div class="units">ratio (water per gram)</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {},
  data() {
    return {
      coffeeGroundsAmount: 12.5, // grams
      coffeeToWaterRatio: 16,
      resultingCoffeeAmount: 175, // milliliters
      waterAmount: 200,
      waterLossRatio: 0.875,
      waterGainRatio: 1.14285, // 1.125
      // waterGainRatio: 1.14285
      focusedElement: null
    }
  },
  methods: {
    fixNumber(num) {
      num = parseFloat(Math.round(num * 100) / 100).toFixed(1)
      if (num % 1 === 0) {
        return Math.trunc(num)
      }
      return num
    },
    calculate(event) {
      if (event.target.id === 'brew') {
        // this.calcGrounds()
        this.calcWaterBasedOnBrew()
        console.log('hello')
      }
      if (event.target.id === 'water') {
        this.calcResultingCoffee()
        this.calcGrounds()
      }
      if (event.target.id === 'grounds') {
        this.calcWater()
        this.calcResultingCoffee()
      }
      if (event.target.id === 'ratio') {
        this.calcWater()
        this.calcResultingCoffee()
      }
    },
    calcWater() {
      let n = this.coffeeGroundsAmount * this.coffeeToWaterRatio

      this.waterAmount = Number(this.fixNumber(n))
    },
    calcWaterBasedOnBrew() {
      let n = this.resultingCoffeeAmount * this.waterGainRatio
      this.waterAmount = Number(this.fixNumber(n))
    },
    calcResultingCoffee() {
      let n = this.waterAmount * this.waterLossRatio
      this.resultingCoffeeAmount = Number(this.fixNumber(n))
    },
    calcGrounds() {
      let n = this.waterAmount / this.coffeeToWaterRatio
      this.coffeeGroundsAmount = Number(this.fixNumber(n))
    }
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700')
#app 
  font-family: 'Roboto'
  font-weight: 400
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 10vh

body
  margin: 0
  padding: 0
  font-family: 'Roboto'
  font-weight: 400

html
  margin: 0
  padding: 0

h1
  font-weight: 400
  margin-top: 0
.container
  display: flex
  align-items: center
  justify-content: center
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
