import React from 'react';

export default function MovieItem({
  title,
  release_year,
  avg_rating
}) {
  return <li
    className='movie-item'>
    <h3>{title}</h3>
    <p>released {release_year}</p>
    <p>average rating: {avg_rating}</p>
  </li>;
}