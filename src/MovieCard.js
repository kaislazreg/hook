import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
  return (
    <div>
        <img src={movie.image} />
        <h1>{movie.name}</h1>
        <Link to={`/trailer/${movie.id}`} >
            <button>details plus</button>
            </Link>
      
    </div>
  )
}

export default MovieCard
