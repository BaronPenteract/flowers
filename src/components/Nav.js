import React from 'react';

import '../blocks/nav/nav.scss';
import '../blocks/burger/burger.scss';
import '../blocks/link/link.scss';
import '../blocks/button/button.scss';
import { Link } from 'react-router-dom';

export default function Nav({ isBurgerActive, setIsBurgerActive }) {
  window.onresize = () => {
    setIsBurgerActive(false);
  };

  const links = [
    { title: 'О компании', link: '/not-found' },
    { title: 'Вопрос-ответ', link: '/not-found' },
    { title: 'Вакансии', link: '/not-found' },
    { title: 'Видео', link: '/not-found' },
    { title: 'Новости', link: '/not-found' },
    { title: 'Магазины', link: '/not-found' },
  ];

  return (
    <aside className={`nav__wrapper ${isBurgerActive ? 'nav__wrapper_active' : ''}`}>
      <button className='burger' type='button' onClick={() => setIsBurgerActive(!isBurgerActive)}>
        <span className={`burger__line ${isBurgerActive ? 'burger__line_active' : ''}`}></span>
      </button>
      <div className='nav__header'>
        <Link to='/login' className='link' onClick={() => setIsBurgerActive(false)}>
          вход
        </Link>{' '}
        |{' '}
        <Link to='/register' className='link' onClick={() => setIsBurgerActive(false)}>
          регистрация
        </Link>
      </div>
      <nav className='nav'>
        <ul className='nav__list'>
          {links.map((link, idx) => (
            <li key={idx} className='nav__item'>
              <Link
                to={link.link}
                className='nav__link link'
                onClick={() => setIsBurgerActive(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='nav__footer'>
        <a className='nav__phone link' href='tel:+73833630505'>
          +7 (383) 363-05-05
        </a>
        <button className='button'>СВЯЗАТЬСЯ</button>
      </div>
    </aside>
  );
}
