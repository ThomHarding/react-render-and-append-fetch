import React from 'react';
import MovieItem from './MovieItem.js';

export default function MovieList({ movies }) {
  return <ul className='movie-list'>
    { 
      movies.map(movie => <MovieItem key={movie.title} {...movie} />
      )
    }

  </ul>;
}