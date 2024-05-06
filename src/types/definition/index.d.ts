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
