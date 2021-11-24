import React from 'react';

import './styles/Header.css';

function Header() {
  return (
    <header>
      <h1>
        Levi Manoel
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#sobre-mim">Sobre mim</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#habilidades">Habilidades</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
