import React from 'react';
import emailImg from '../../assets/images/icons/gmail.png';
import githubImg from '../../assets/images/icons/github.png';
import linkedInImg from '../../assets/images/icons/linkedIn.png';
import './style.css';

export default function Footer() {


  return (
    <footer
      id="footer"
    >
        <a href="mailto:nolan.spence7@gmail.com">
        <img
            className='gmail'
            src={emailImg}
            alt='Gmail logo'
          />
        </a>
        <a href="https://github.com/Unicorn-Barf" target="_blank">
        <img
            src={githubImg}
            alt='Github logo'
          />
        </a>
        <a href="https://www.linkedin.com/in/aerospence/" target="_blank">
          <img
            src={linkedInImg}
            alt='linkedIn logo'
          />
        </a>
    </footer>
  );
};