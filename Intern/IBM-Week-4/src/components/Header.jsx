import React from 'react';
import './Header.css'

export default function Header(props) {
  return (
    <header className=" row center" id='head'>
      <div>
        <a href="#/">
          <h1>React-Cart</h1>
          <small>© 2022 React-cart</small>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
        <a href="#/help"> Help-center</a>
      </div>
    </header>
  );
}