import React, { useEffect, useState } from 'react'
import axios from '../../Js/axios'
import requests from '../../Js/requests'
import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState([])

  // A function that truncates our desc when the characters are over a specified amount

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
    }
    fetchData()
  }, [])
  const bgImage = `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: bgImage,
      }}
    >
      <div className="contain">
        <div className="banner_contents">
          <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">{truncate(movie?.overview)}</h1>
        </div>
      </div>

      <div className="banner_fadeBottom"></div>
    </header>
  )
}

export default Banner
