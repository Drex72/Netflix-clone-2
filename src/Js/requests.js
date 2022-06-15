const API_KEY = 'ac2bfec6eb79a4298a2fb88d0bb79d51'
const requests = {
  fetchTrendingDay: `/trending/all/day?api_key=${API_KEY}&page=1`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}language=en—U5`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en—US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAnimations: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchScifi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchHistorical: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  fetchWar: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
}

export default requests

// Search       export default requests`/search/movie?api_key=${API_KEY}&language=en-US&query=halo&page=1&include_adult=false`
