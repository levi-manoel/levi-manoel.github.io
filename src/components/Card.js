import React from 'react';

import './styles/Card.css';

function Card(props) {
  const { title, text } = props;
  return (
    <div className='card'>
      <h3>{ title }</h3>
      <p>{ text }</p>
    </div>
  );
}

export default Card;