import React from 'react';

import Header from '../components/Header';
import Card from '../components/Card';

function Home() {
  return (
    <>
      <Header
        title="Levi Manoel"
        subtitle="Desenvolvedor Full-Stack"
      />
      <hr />
      <main>
        <div className='grid'>
          <Card title="Sobre mim" text="Veja minhas habilidades e um pouco da caminhada até aqui" linkTo="/sobre" />
          <Card title="Projetos" text="Veja meus projetos de orgulho, tanto ele rodando como seu repositório no github" linkTo="/projetos"/>
          <Card title="Github" text="Veja minha conta no Github" linkTo="/github" />
          <Card title="LinkedIn" text="Veja minha conta no LinkedIn" linkTo="/linkedin" />
        </div>
      </main>
    </>
  );
}

export default Home;
