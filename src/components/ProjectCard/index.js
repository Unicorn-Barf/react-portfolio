import React from 'react';
import './style.css';
// const freakimono = require('../../assets/images/projects/freakimono.png');

export default function Header({ githubUrl, name, imageUrl }) {
  // // const appendedUrl = './../..' + imageUrl;
  // console.log(imageUrl);
  // const appendedUrl = "./../.." + imageUrl;
  // console.log(appendedUrl === './../../assets/images/projects/NaNarWord.png');
  // const realImg = require('./../../assets/images/projects/NaNarWord.png');
  // console.log(realImg);
  return (
    <div
      className='project-card'
      style={{backgroundImage: `url(${imageUrl})`}}
    >
      <a className={`${name}`} href={githubUrl} rel="noreferrer" target="_blank">
        <h3>{name}</h3>
      </a>
    </div>
  )
};