import React from 'react';
import ColourItem from './ColourItem.js';

export default function colourList({ colours }) {
  return <ul className='colour-list'>
    { 
      colours.map(colour => <ColourItem key={colour.name} {...colour} />
      )
    }

  </ul>;
}