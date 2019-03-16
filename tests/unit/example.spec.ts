import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Ingredient from '@/components/Ingredient.vue'

const factory = (
  values = { id: 'someid', value: 5, description: 'something' }
) => {
  return shallowMount(Ingredient, { data: { ...values } })
}
