import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Ingredient from '@/components/Ingredient.vue'

const factory = (
  values = { id: 'someid', value: 5, description: 'something' }
) => {
  return shallowMount(Ingredient, {
    propsData: {
      ...values
    }
  })
}

describe('Ingredient.vue', () => {
  it('Renders an input field', () => {
    const wrapper = factory()
    expect(wrapper.find('input').exists()).to.equal(true) // checked
  })
  it('Renders an input field of type number', () => {
    const wrapper = factory()
    expect(wrapper.find('input').attributes().type).to.equal('number') // checked
  }),
    it('Renders the passed prop called value', () => {
      const wrapper = factory()
      const inputField = wrapper.find('input').element as HTMLInputElement
      const value = inputField.value
      expect(value).to.equal('5')
    }),
    it('Renders the passed prop called id', () => {
      const wrapper = factory()
      expect(wrapper.find('input').attributes().id).to.equal('someid')
    }),
    it('Renders the prop called description', () => {
      const wrapper = factory()
      expect(wrapper.find('.description').text()).to.equal('something')
    }),
    it('Emits an event when the input field value changes', () => {
      const wrapper = factory()
      wrapper.find('input').trigger('change')
      expect(wrapper.emitted('new-value')).to.have.length(1)
    })
})
