import React from 'react';

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex items-center space-x-12 font-secondary'>
        <li className='nav-link'>
          <a href='#'>Home</a>
        </li>
        <li className='nav-link'>
          <a href='#'>About</a>
        </li>
        <li className='nav-link'>
          <a href='#'>Services</a>
        </li>
        <li className='nav-link'>
        <a href='#'>Contact</a>
        </li>
        <li className='nav-link'>
          <a href='#'>Blog</a>
        </li>
        <btn className='btn'>
          <a href='#'>Sign up</a>
        </btn>
      </ul>
    </nav>
  );
};

export default Nav;