import { mount } from '@vue/test-utils'
import MovieItem from '../MovieItem.vue'
import { describe, expect, it, vi } from 'vitest'

describe('MovieItem.vue', () => {
  const movieProps = {
    id: 123,
    name: 'Test Movie',
    image: { medium: 'https://example.com/image.jpg' },
    rating: { average: 8.5 },
    genres: ['test1', 'test2'],
    language: 'english',
    summary: 'summary',
    url: 'example.com',
    officialSite: 'example.com',
    premiered: 'string',
  }
  it('navigates to details page when clicked', async () => {
    const mockRouter = {
      push: vi.fn(),
    }
    const wrapper = await mount(MovieItem, {
      props: {
        movie: movieProps,
      },
      global: {
        mocks: {
          router: mockRouter,
        },
      },
    })
    await wrapper.trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith('/app/details/123')
  })
  it('renders correctly', async () => {
    const wrapper = await mount(MovieItem, {
      props: {
        movie: movieProps,
      },
    })
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.title').text()).toBe('Test Movie')
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/image.jpg')
    expect(wrapper.find('.rate').text()).toContain('8.5')
  })
})
