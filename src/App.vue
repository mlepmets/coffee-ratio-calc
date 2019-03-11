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



</style>
