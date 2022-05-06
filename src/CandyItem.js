import React from 'react';

export default function CandyItem({
  name,
  vegan,
  parent_company
}) {
  return <li
    className='candy-item'>
    <h3>{name}</h3>
    <p>owned by {parent_company}</p>
    <p>vegan? {vegan ? '✔️' : '❌'} (probably)</p>
  </li>;
}