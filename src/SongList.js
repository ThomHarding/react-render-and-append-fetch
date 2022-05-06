import React from 'react';
import SongItem from './SongItem.js';

export default function SongList({ songs }) {
  return <div className='song-list'>
    { 
      songs.map(song => <SongItem key={song.name} {...song} />
      )
    }

  </div>;
}