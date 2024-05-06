import { defineStore } from 'pinia'
import movieService from '@/lib/api/movies'

interface State {
  movieList: Movie[]
  genreList: Record<string, Movie[]>
  filteredMovies: Movie[]
  selectedMovie: Movie
  allGenres: string[]
  filterInput: string
}

export const movieStore = defineStore('movieStore', {
  state: (): State => {
    return {
      movieList: [],
      genreList: {},
      filteredMovies: [],
      allGenres: [],
      selectedMovie: {} as Movie,
      filterInput: '',
    }
  },
  getters: {
    selectedShowSeasons: (state) => state.selectedMovie?._embedded?.seasons,
    selectShowEpisodes: (state) => state.selectedMovie?._embedded?.episodes,
    selectShowCast: (state) => state.selectedMovie?._embedded?.cast,
    selectShowDescription: (state) => state.selectedMovie?.summary,
    selectShowMetadata: (state) => {
      return {
        name: state.selectedMovie.name,
        officialSite: state.selectedMovie.officialSite,
        premiered: state.selectedMovie.premiered,
        genres: state.selectedMovie.genres,
        image: state.selectedMovie.image,
        rating: state.selectedMovie.rating,
        language: state.selectedMovie.language,
        url: state.selectedMovie.url,
      }
    },
  },
  actions: {
    async fetchAllMovies() {
      try {
        // const promises = []
        // for (let i = 0; i < 1; i++) {
        //   promises.push(movieService.fetchAllShows(i))
        // }
        let movies = []
        const results = await movieService.fetchAllShows(0)
        movies.push(...results)

        const allGenres: string[] = []
        let res: Record<string, Movie[]> = {}
        movies.forEach((movie) => {
          movie.genres.forEach((genre: string) => {
            if (!allGenres.includes(genre)) {
              allGenres.push(genre)
              res[genre] = [movie]
            } else {
              res[genre].push(movie)
            }
          })
        })
        this.allGenres = allGenres.sort((a, b) => a.localeCompare(b))
        const sortedRes: Record<string, Movie[]> = {}
        Object.keys(res)
          .sort()
          .forEach((key) => {
            sortedRes[key] = res[key].sort((a, b) => b.rating.average - a.rating.average)
          })

        this.genreList = sortedRes
      } catch (error) {
        return error
      }
    },

    async getSelectedMovie(id: number) {
      const data = await movieService.fetchSingleShow(id)
      this.selectedMovie = data
      console.log(data)
    },

    async getFilteredMovies() {
      const data = await movieService.fetchSearchResults(this.filterInput)
      this.filteredMovies = data
      console.log(data)
    },
  },
})
