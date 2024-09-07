import React from 'react';
import { ReactComponent as Logo } from '../assets/navbar-logo.svg';
import '../styles/navbar.styles.css';

export default function Navbar() {
  return (
    <div className='header'>
      <p id='header-txt'>Enos Weather Forecaster</p>
      <Logo />
    </div>
  );
}
