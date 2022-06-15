import React, { useEffect, useState } from 'react'
import axios from '../../Js/axios'
import './Row.css'

const baseurl = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([])

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  console.log(movies)
  return (
    <div className="row">
      <h2 className="title">{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_posterLarge"
            src={`${baseurl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
