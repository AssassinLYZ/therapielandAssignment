import { mount } from '@vue/test-utils'
import Search from '../Search.vue'
import { createTestingPinia } from '@pinia/testing'
import { describe, expect, it } from 'vitest'
describe('Search.vue', () => {
  // Create a testing Pinia instance
  const pinia = createTestingPinia({
    initialState: {
      movieStore: {
        filterInput: 'search term',
      },
    },
  })

  // Test input filtering functionality
  it('filters input correctly', async () => {
    const wrapper = mount(Search, {
      global: {
        plugins: [pinia],
      },
    })
    const input = wrapper.find('input')

    // Check if the value of the input field is set correctly
    expect(input.element.value).toBe('search term')
  })

  // Test clearing input when close button is clicked
  it('clears input when close button is clicked', async () => {
    const wrapper = mount(Search, {
      global: {
        plugins: [pinia],
      },
    })

    // Set the value of the input field
    const input = wrapper.find('input')
    await input.setValue('search term')

    // Click the close button
    const closeButton = wrapper.find('.filter-button')
    await closeButton.trigger('click')

    // Check if the value of the input field is cleared
    expect(input.element.value).toBe('')
  })
})
