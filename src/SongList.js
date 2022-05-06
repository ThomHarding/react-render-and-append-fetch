import React from 'react';
import SongItem from './SongItem.js';

export default function SongList({ songs }) {
  return <ul className='song-list'>
    { 
      songs.map(song => <SongItem key={song.name} {...song} />
      )
    }

  </ul>;
}