<template>
  <div id="app">
    <header>
      <h1>Coffee Ratio Calculator</h1>
      <p>Calculate how much grounds to use for your cup of coffee.</p>
    </header>
    <main>
      <div class="container">
        <Ingredient
          :id="brew.name"
          :value="brew.value"
          :description="brew.description"
          v-on:input="calculate"
        ></Ingredient>
        <Ingredient
          :id="water.name"
          :value="water.value"
          :description="water.description"
          v-on:input="calculate"
        ></Ingredient>
        <Ingredient
          :id="grounds.name"
          :value="grounds.value"
          :description="grounds.description"
          v-on:input="calculate"
        ></Ingredient>
        <Ingredient
          :id="ratio.name"
          :value="ratio.value"
          :description="ratio.description"
          v-on:input="calculate"
        ></Ingredient>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Ingredient from './components/Ingredient.vue'

interface Element {
  [key: string]: string | number
  name: string
  value: number
  description: string
}
interface Elements {
  [key: string]: Element
}

@Component({
  components: {
    Ingredient
  }
})
export default class App extends Vue {
  private waterLossRatio: number = 0.875
  private waterGainRatio: number = 1.14288

  private brew: Element = {
    name: 'brew',
    value: 175,
    description: 'resulting coffee (ml)'
  }
  private water: Element = {
    name: 'water',
    value: 200,
    description: 'water (ml)'
  }
  private grounds: Element = {
    name: 'grounds',
    value: 12.5,
    description: 'coffee grounds (g)'
  }
  private ratio: Element = {
    name: 'ratio',
    value: 16,
    description: 'ratio (water/grounds)'
  }
  private allIngredients: Elements = {
    brew: this.brew,
    water: this.water,
    grounds: this.grounds,
    ratio: this.ratio
  }
  private fixNumber(num: number) {
    // fix number to be one decimal after comma
    num = parseFloat(num.toFixed(1))
    // if (num % 1 === 0) {
    //   return num
    // }
    return num
  }
  private calcWater() {
    const n = this.grounds.value * this.ratio.value
    this.water.value = this.fixNumber(n)
  }
  private calcWaterBasedOnBrew() {
    const n = this.brew.value * this.waterGainRatio
    this.water.value = this.fixNumber(n)
  }
  private calcResultingCoffee() {
    const n = this.water.value * this.waterLossRatio
    this.brew.value = this.fixNumber(n)
  }
  private calcGrounds() {
    const n = this.water.value / this.ratio.value
    this.grounds.value = this.fixNumber(n)
  }
  private calculate(data: any) {
    this.allIngredients[data.id].value = data.value
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
  padding: 0 10px 0 10px
h1
  font-size: 5vw
  font-weight: 400
  margin-top: 0
p
  font-size: 2vw
  font-family: 'Roboto'
  font-weight: 400
@media screen and (max-width: 1200px)
  h1
    font-size: 8vw
  p
    font-size: 4vw
@media screen and (max-width: 500px)
  h1
    font-size: 12vw
    margin-bottom: 0
  p
    font-size: 5vw
    margin-top: 0
</style>
