import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './Main';
import Nav from './Nav';
import '../blocks/page/page.scss';
import Intro from './Intro';
import Cart from './Cart';
import NotFound from './NotFound';
import Login from './Login';
import Register from './Register';

function App() {
  const [isBurgerActive, setIsBurgerActive] = React.useState(false);

  return (
    <div className='page'>
      <Nav isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
      <Routes>
        <Route path='/' element={<Main isBurgerActive={isBurgerActive} />}>
          <Route index element={<Intro />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<NotFound replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
