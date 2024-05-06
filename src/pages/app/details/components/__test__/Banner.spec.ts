import { mount } from '@vue/test-utils'
import ShowBanner from '../Banner.vue'
import { describe, expect, it } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

describe('ShowBanner.vue', () => {
  const pinia = createTestingPinia({
    initialState: {
      movieStore: {
        selectedMovie: {
          name: 'Test Show',
          summary: 'This is a test show summary.',
          officialSite: 'https://example.com',
          image: {
            original: 'https://example.com/image.jpg',
          },
        },
      },
    },
  })
  it('renders show name and summary correctly', () => {
    const wrapper = mount(ShowBanner, {
      global: {
        plugins: [pinia],
        stubs: ['router-link'],
      },
    })
    expect(wrapper.find('.banner-title').text()).toBe('Test Show')
    expect(wrapper.find('.summary-text').text()).toContain('This is a test show summary.')
    expect(wrapper.find('.link a').attributes('href')).toBe('https://example.com')
  })
})
