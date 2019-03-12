<template>
  <div id="app">
    <header>
      <h1>Coffee Ratio Calculator</h1>
      <p>Calculate how much grounds to use for your cup of coffee.</p>
    </header>
    <main>
      <div class="container">
        <Ingredient
          :name="ingredients.brew.name"
          :val="ingredients.brew.value"
          :description="ingredients.brew.description"
        ></Ingredient>
        <Ingredient
          :name="ingredients.water.name"
          :val="ingredients.water.value"
          :description="ingredients.water.description"
        ></Ingredient>
        <Ingredient
          :name="ingredients.grounds.name"
          :val="ingredients.grounds.value"
          :description="ingredients.grounds.description"
        ></Ingredient>
        <Ingredient
          :name="ingredients.ratio.name"
          :val="ingredients.ratio.value"
          :description="ingredients.ratio.description"
        ></Ingredient>
      </div>
    </main>
  </div>
</template>

<script>
import Ingredient from './components/Ingredient.vue'

export default {
  name: 'app',
  components: {
    Ingredient
  },
  data() {
    return {
      coffeeGroundsAmount: 12.5, // grams
      coffeeToWaterRatio: 16,
      resultingCoffeeAmount: +175, // milliliters
      waterAmount: 200,
      waterLossRatio: 0.875,
      waterGainRatio: 1.14285, // 1.125
      ingredients: {
        brew: {
          name: 'brew',
          value: +175,
          description: 'resulting coffee (ml)'
        },
        water: {
          name: 'water',
          value: +200,
          description: 'water (ml)'
        },
        grounds: {
          name: 'grounds',
          value: +12.5,
          description: 'coffee grounds (g)'
        },
        ratio: {
          name: 'ratio',
          value: +16,
          description: 'ratio (water/grounds)'
        }
      }
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
.container
  display: flex
  align-items: center
  justify-content: center
body
  margin: 0
  padding: 0
  font-family: 'Roboto'
  font-weight: 400

html
  margin: 0
  padding: 0
</style>
