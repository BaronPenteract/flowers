import React from 'react';
import { Link } from 'react-router-dom';

import '../blocks/header/header.scss';
import '../blocks/link/link.scss';
import cartIcon from '../images/icons/cart.png';

export default function Header() {
  return (
    <header className={`header`}>
      <div className='header__cart'>
        <Link to='/cart' className='link'>
          <img src={cartIcon} alt='корзина' /> | корзина
        </Link>
      </div>
      <div className='header__content'>
        <h2 className='header__title'>
          <Link to='/' className='link'>
            Flowers
          </Link>
        </h2>
        <ul className='header__nav'>
          <li className='header__nav-item'>
            <Link to='/not-found' className='header__link link'>
              Каталог
            </Link>
          </li>
          <li>
            <Link to='/not-found' className='header__link link'>
              Акции
            </Link>
          </li>
          <li>
            <Link to='/not-found' className='header__link link'>
              Услуги
            </Link>
          </li>
        </ul>
        <input className='header__search' type='text' placeholder='Поиск' />
      </div>
    </header>
  );
}
