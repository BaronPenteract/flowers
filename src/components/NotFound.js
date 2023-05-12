import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>Пока этой страницы не существует, но мы работаем над этим</h1>
      <Link to='/'>На главную</Link>
    </>
  );
}
