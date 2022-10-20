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
          I am full-stack web-developer with significant background in biological sciences. I am freshly graduated from the University of Pennsylania's full-time coding bootcamp, through which I learned and became proficient at HTML5, CSS, JavaScript, Node, MySQL, JQuery, React, MongoDB, and various CSS frameworks. Moreover, I am confident that I have the tools, interest, and ability to learn any new technology that may be recquired of me as I move through my professional journey.         </p>
        </div>
      </div>
    </div>
  );
}
