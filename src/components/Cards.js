import React from 'react';

import Card from './Card';

import '../blocks/cards/cards.scss';
import card1 from '../images/icons/card1.png';
import card2 from '../images/icons/card2.png';
import card3 from '../images/icons/card3.png';
import card4 from '../images/icons/card4.png';

const cards = [
  { title: 'ПОПУЛЯРНОЕ', subtitle: 'на этой неделе', link: '/not-found', image: card1 },
  { title: 'НОВИНКИ', subtitle: 'самые свежие товары', link: '/not-found', image: card2 },
  { title: 'ДЛЯ ДОМА', subtitle: 'для вашего уюта', link: '/not-found', image: card3 },
  { title: 'ДЛЯ ДАЧИ', subtitle: 'украсте ваш участок', link: '/not-found', image: card4 },
];

export default function Cards() {
  return (
    <>
      <section className='cards' title='Категории'>
        <ul className='cards__list'>
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </ul>
      </section>
    </>
  );
}
