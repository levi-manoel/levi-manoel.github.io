import React from 'react';

import './styles/Abilities.css'

function Abilities() {
  return (
    <>
      <h3>Habilidades</h3>
      <div id="habilidades-section-container">
        <div className="habilidades-texto-container">
          <p>HTML5, CSS3, JavaScript, Jest e React.js em conjunto com suas bibliotecas como ContextAPI, Redux e RTL.</p>
          <p>Atualmente estudo back-end</p>
          <p id="acima">Contruo sites responsivos utilizando a metodologia "mobile-first"</p>
        </div>
        <div className="container-habilidades-imagens">
          <div className="metade-habilidades">
            <div className="habilidades-imagem-container">
              <img className="habilidade-imagem" alt="Logo da habilidade" src="https://img.icons8.com/ios-filled/50/000000/html-5--v1.png"/>
            </div>
            <div className="habilidades-imagem-container">
              <img className="habilidade-imagem" alt="Logo da habilidade" src="https://img.icons8.com/ios-filled/50/000000/css3.png"/>
            </div>
            <div className="habilidades-imagem-container">
              <img className="habilidade-imagem" alt="Logo da habilidade" src="https://img.icons8.com/ios-filled/50/000000/javascript.png"/>
            </div>
          </div>
          <div className="metade-habilidades">
            <div className="habilidades-imagem-container">
              <img className="habilidade-imagem" alt="Logo da habilidade" src="https://img.icons8.com/ios-filled/50/000000/joker.png"/>
            </div>
            <div className="habilidades-imagem-container">
              <img className="habilidade-imagem" alt="Logo da habilidade" src="https://img.icons8.com/ios-filled/50/000000/react-native.png"/>
            </div>
            <div className="habilidades-imagem-container">
              <img className="habilidade-imagem" alt="Logo da habilidade" src="https://img.icons8.com/ios-filled/50/000000/redux.png"/>
            </div>
          </div>
        </div>
        <p id="abaixo">Contruo sites responsivos utilizando a metodologia "mobile-first"</p>
      </div>
    </>
  );
}

export default Abilities;
