import React from 'react';

import Cards from './Cards';
import '../blocks/intro/intro.scss';
import '../blocks/button/button.scss';

export default function Intro() {
  return (
    <>
      <section className='intro'>
        <h1 className='intro__title'>
          <span>Цветы</span> <span>на любой вкус</span> <span>в одном месте</span>
        </h1>
        <button className='button intro__button'>Узнать о нас больше</button>
      </section>
      <Cards />
    </>
  );
}
