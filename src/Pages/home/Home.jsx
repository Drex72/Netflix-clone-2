import React from 'react'
import Row from '../../components/Row/Row'
import requests from '../../Js/requests'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Nav from '../../components/Nav/Nav'
import Navbar from '../../components/navbar/Navbar'

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingDay} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Western" fetchUrl={requests.fetchWestern} />
      <Row title="Animation" fetchUrl={requests.fetchAnimations} />
      <Row title="Historical" fetchUrl={requests.fetchHistorical} />
      <Row title="Sci-Fi" fetchUrl={requests.fetchScifi} />
      <Row title="Thriller" fetchUrl={requests.fetchThriller} />
      <Row title="Crime" fetchUrl={requests.fetchCrime} />
      <Row title="Drama" fetchUrl={requests.fetchDrama} />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasy} />
      <Row title="War" fetchUrl={requests.fetchWar} />
    </div>
  )
}

export default App
