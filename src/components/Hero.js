import React from 'react';

import './styles/Hero.css'

function Hero() {
  return (
    <>
      <div>
        Olá, eu sou <span>Levi Manoel</span> seja bem vindo ao meu portfólio web!
      </div>
      <div className="hero-links-container">
        <a className="hero-link" target="_blank" href="https://www.linkedin.com/in/levi-manoel/" rel="noreferrer">LinkedIn</a>
        <a className="hero-link" target="_blank" href="https://github.com/levi-manoel" rel="noreferrer">GitHub</a>
        <a className="hero-link" target="_blank" href="https://wa.me/+5581997566204" rel="noreferrer">WhatsApp</a>
      </div>
    </>
  );
}

export default Hero;
