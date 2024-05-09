interface Movie {
  genres: string[]
  id: number
  image: Record<string, string>
  language: string
  name: string
  rating: { average: number }
  summary: string
  url: string
  officialSite: string
  premiered: string
  _embedded?: Record<string, any>
}

interface FilteredMovie {
  score: number
  show: Movie
}

interface Episodes {
  url?: string
  name: string
  summary: string
  number: number
  image: Record<string, string>
  person: {
    image: {
      medium: string
    }
  }
}
