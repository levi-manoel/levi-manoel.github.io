import React from 'react';

import Header from '../components/Header';
import Card from '../components/Card';

function Home() {
  return (
    <>
      <Header />
      <hr />
      <main>
        <div className='grid'>
          <Card title="Sobre mim" text="Veja minhas habilidades e um pouco da caminhada até aqui" />
          <Card title="Projetos" text="Veja meus projetos de orgulho, tanto ele rodando como seu repositório no github" />
          <Card title="Github" text="Veja minha conta no Github" />
          <Card title="LinkedIn" text="Veja minha conta no LinkedIn" />
        </div>
      </main>
    </>
  );
}

export default Home;
