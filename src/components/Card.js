import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Card.css';

function Card(props) {
  const { title, text, linkTo} = props;
  
  return (
    <Link to={ linkTo }>
      <div className='card'>
        <h3>{ title }</h3>
        <hr />
        <p>{ text }</p>
      </div>
    </Link>
  );
}

export default Card;