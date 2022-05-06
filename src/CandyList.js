import React from 'react';
import CandyItem from './CandyItem.js';

export default function candyList({ candies }) {
  return <ul className='candy-list'>
    { 
      candies.map(candy => <CandyItem key={candy.name} {...candy} />
      )
    }

  </ul>;
}