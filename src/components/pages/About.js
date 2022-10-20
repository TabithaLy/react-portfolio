import React from 'react';
import '../utils/main.css';
import pfp from '../utils/images/photo.jpg';

export default function About() {
  return (
    <div className='page container'>
      <div className='row'>
        <div className='col'>
          <h2>About Me</h2>
          <img src={pfp} className="rounded float-left" alt="Tabitha"></img>
        </div>
        <div className='col'>
          <p>
            My name is Tabitha Spencer-Salmon. I am a fullstack web developer with a significant background in biological sciences. I am proficient at HTML5, CSS, JavaScripe, Node, MySQL, JQuery, React, MongoDB, and various CSS frameworks.
          </p>
        </div>
      </div>
    </div>
  );
}
