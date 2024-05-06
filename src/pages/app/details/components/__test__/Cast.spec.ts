import { mount } from '@vue/test-utils'
import ShowCast from '../Cast.vue'
import { describe, expect, it } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { defineStore } from 'pinia'
describe('ShowCast.vue', () => {
  const useMovieStore = defineStore('movieStore', {
    getters: {
      selectShowCast: (state) => [
        {
          person: {
            image: {
              medium: 'https://example.com/image1.jpg',
            },
          },
        },
        {
          person: {
            image: {
              medium: 'https://example.com/image2.jpg',
            },
          },
        },
      ],
    },
  })
  const pinia = createTestingPinia()
  useMovieStore(pinia)

  it('renders cast list correctly', () => {
    const wrapper = mount(ShowCast, {
      global: {
        plugins: [pinia],
      },
    })

    const images = wrapper.findAll('.cast-item img')
    expect(images).toHaveLength(2)

    expect(images[0].attributes('src')).toBe('https://example.com/image1.jpg')
    expect(images[1].attributes('src')).toBe('https://example.com/image2.jpg')
  })

  // Test when data is []
  it('renders "No Data" when cast data is empty', () => {
    const wrapper = mount(ShowCast, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              movieStore: {
                selectShowCast: [],
              },
            },
          }),
        ],
      },
    })

    expect(wrapper.find('.cast-list').exists()).toBe(false)
    expect(wrapper.find('.warpper').text()).toContain('No Data')
  })
})
