import React from 'react';

import './styles/Header.css';

function Header(props) {
  const { title, subtitle } = props;
  return (
    <header>
      <h1>
        { title }
      </h1>
      <h2>
        { subtitle }
      </h2>
    </header>
  );
}

export default Header;
