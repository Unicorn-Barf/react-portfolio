import React from 'react';
import './style.css';

export default function Footer() {


  return (
    <footer
      id="footer"
    >
        <a href="mailto:nolan.spence7@gmail.com">
        <img
            className='gmail'
            src='/assets/images/gmail.png'
            alt='Gmail logo'
          />
        </a>
        <a href="https://github.com/Unicorn-Barf" target="_blank">
        <img
            src='/assets/images/github.png'
            alt='Github logo'
          />
        </a>
        <a href="https://www.linkedin.com/in/aerospence/" target="_blank">
          <img
            src='/assets/images/linkedIn.png'
            alt='linkedIn logo'
          />
        </a>
    </footer>
  );
};