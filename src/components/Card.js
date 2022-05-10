import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Card.css';

function Card(props) {
  const { title, text, linkTo, url } = props;

  const returnCard = url ? (
    <a href={ url }>
      <div className='card'>
        <h3>{ title }</h3>
        <hr />
        <p>{ text }</p>
      </div>
    </a>
  ) : (
    <Link to={ linkTo }>
      <div className='card'>
        <h3>{ title }</h3>
        <hr />
        <p>{ text }</p>
      </div>
    </Link>
  );
  
  return returnCard;
}

export default Card;