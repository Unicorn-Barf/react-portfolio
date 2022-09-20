import React from 'react';
import './style.css';

export default function Header({ githubUrl, name, imageUrl }) {

  return (
    <div
      className='project-card'
      style={{backgroundImage: `url(${imageUrl})`}}
    >
      <a class={`${name}`} href={githubUrl} target="_blank">
        <h3>{name}</h3>
      </a>
    </div>
  )
};