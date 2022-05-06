import React from 'react';

export default function SongItem({
  title,
  artist,
  release_date
}) {
  return <div
    className='song-item'>
    <h3>{title}</h3>
    <p>by {artist}</p>
    <p>released {release_date}</p>
  </div>;
}