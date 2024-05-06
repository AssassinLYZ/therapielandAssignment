import axios from './index'
import { BASE_URL_API } from '@/lib/api'

const urlConstants = {
  apiBaseUrl: BASE_URL_API, // https://api.tvmaze.com
  fetchShowsUrl: `${BASE_URL_API}/shows`, // https://api.tvmaze.com/shows
  seasonsCastEpisodesEmbed: `?embed[]=episodes&embed[]=cast&embed[]=seasons`,
  searchShowsUrl: `${BASE_URL_API}/search/shows?q=`, // https://api.tvmaze.com/search/shows?q=
}

const fetchAllShows = async (page: number) => {
  const response = await axios.get(urlConstants.fetchShowsUrl + `?page=${page}`)
  return response.data
}

const fetchSearchResults = async (query: string) => {
  const fetchSearchResultsUrl = urlConstants.searchShowsUrl + `${query}`
  const response = await axios.get(fetchSearchResultsUrl)
  return response.data
}

const fetchSingleShow = async (showId: number) => {
  const fetchShowDetailUrl =
    urlConstants.fetchShowsUrl + `/${showId}` + urlConstants.seasonsCastEpisodesEmbed
  const response = await axios.get(fetchShowDetailUrl)
  return response.data
}

const movieService = {
  fetchAllShows,
  fetchSearchResults,
  fetchSingleShow,
}

export default movieService
