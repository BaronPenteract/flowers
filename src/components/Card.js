import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ image, title, subtitle, link }) {
  return (
    <li className='cards__item'>
      <Link to={link} className='cards__link'>
        <img className='cards__image' src={image} alt={title} />
        <div className='cards__content'>
          <h2 className='cards__title'>{title}</h2>
          <p className='cards__subtitle'>{subtitle}</p>
        </div>
      </Link>
    </li>
  );
}
