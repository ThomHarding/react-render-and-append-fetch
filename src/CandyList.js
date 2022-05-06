import React from 'react';
import CandyItem from './CandyItem.js';

export default function candyList({ candies }) {
  return <div className='candy-list'>
    { 
      candies.map(candy => <CandyItem key={candy.name} {...candy} />
      )
    }

  </div>;
}