import React from 'react';

export default function MovieList({ movies }) {
  return <div className='movie-list'>
    { 
      movies.map(movie => 
        <div className="movie" key={movie.style + movie.flavor}>
          <p>{movie.title}</p>
          <p>{movie.release_year}</p>
          <p>{movie.avg_rating}</p>
        </div>
      )
    }

  </div>;
}