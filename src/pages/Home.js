import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Abilities from '../components/Abilities';
import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" className="section-template">
          <Hero />
        </section>
        <section id="sobre-mim" className="section-template">
          <AboutMe />
        </section>
        <section id="projetos" className="section-template">
          <Projects />
        </section>
        <section id="habilidades" className="section-template">
          <Abilities />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
