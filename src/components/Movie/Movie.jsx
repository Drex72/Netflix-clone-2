import React from 'react'

const IMG_API = 'https://image.tmdb.org/t/p/w1280'

const Movie = ({ title, overview, poster_path, vote_average }) => {
  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt="" />
    </div>
  )
}

export default Movie
