import React from 'react';

export default function ColourItem({
  name,
  hexCode,
  frequency
}) {
  return <li
    className='colour-item' style={{ background: hexCode }}>
    <h3>{name}</h3>
    <p>hex code {hexCode}</p>
    <p>light frequency: {frequency} nanometers</p>
  </li>;
}