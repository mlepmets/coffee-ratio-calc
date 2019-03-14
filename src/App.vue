<template>
  <div id="app">
    <header>
      <h1>Coffee Ratio Calculator</h1>
      <p>Calculate how much grounds to use for your cup of coffee.</p>
    </header>
    <main>
      <div class="container">
        <Ingredient
          :id="ingredients.brew.name"
          :value="ingredients.brew.value"
          :description="ingredients.brew.description"
          v-on:input="calculate"
        ></Ingredient>
        <Ingredient
          :id="ingredients.water.name"
          :value="ingredients.water.value"
          :description="ingredients.water.description"
          v-on:input="calculate"
        ></Ingredient>
        <Ingredient
          :id="ingredients.grounds.name"
          :value="ingredients.grounds.value"
          :description="ingredients.grounds.description"
          v-on:input="calculate"
        ></Ingredient>
        <Ingredient
          :id="ingredients.ratio.name"
          :value="ingredients.ratio.value"
          :description="ingredients.ratio.description"
          v-on:input="calculate"
        ></Ingredient>
      </div>
    </main>
  </div>
</template>

<script>
// import bus from './eventBus.js'
import Ingredient from './components/Ingredient.vue'

export default {
  name: 'app',
  components: {
    Ingredient
  },
  data() {
    return {
      waterLossRatio: 0.875,
      waterGainRatio: 1.14288,
      ingredients: {
        // base values
        brew: {
          name: 'brew',
          value: 175,
          description: 'resulting coffee (ml)'
        },
        water: {
          name: 'water',
          value: 200,
          description: 'water (ml)'
        },
        grounds: {
          name: 'grounds',
          value: 12.5,
          description: 'coffee grounds (g)'
        },
        ratio: {
          name: 'ratio',
          value: 16,
          description: 'ratio (water/grounds)'
        }
      }
    }
  },
  methods: {
    fixNumber(num) {
      // fix number to be one decimal after comma
      num = parseFloat(num.toFixed(1))
      if (num % 1 === 0) {
        return parseInt(num)
      }
      return num
    },
    calculate(data) {
      this.ingredients[data.id].value = data.value
      if (data.id === 'brew') {
        // this.calcGrounds()
        this.calcWaterBasedOnBrew()
      }
      if (data.id === 'water') {
        this.calcResultingCoffee()
        this.calcGrounds()
      }
      if (data.id === 'grounds') {
        this.calcWater()
        this.calcResultingCoffee()
      }
      if (data.id === 'ratio') {
        this.calcWater()
        this.calcResultingCoffee()
      }
    },
    calcWater() {
      let n = this.ingredients.grounds.value * this.ingredients.ratio.value

      this.ingredients.water.value = this.fixNumber(n)
    },
    calcWaterBasedOnBrew() {
      let n = this.ingredients.brew.value * this.waterGainRatio
      this.ingredients.water.value = this.fixNumber(n)
    },
    calcResultingCoffee() {
      let n = this.ingredients.water.value * this.waterLossRatio
      this.ingredients.brew.value = this.fixNumber(n)
    },
    calcGrounds() {
      let n = this.ingredients.water.value / this.ingredients.ratio.value
      this.ingredients.grounds.value = this.fixNumber(n)
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
