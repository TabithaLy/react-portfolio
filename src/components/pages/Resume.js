import React from 'react';
import '../utils/main.css';
// import techres from '../utils/images/techres.pdf';
import techResume from '../utils/images/techResume.pdf';

export default function Resume() {
  return (
    <div className="page">
      <a download="techResume.pdf" href={techResume}><h2>Resume</h2></a>
      <h3>Front-End</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>Bulma</li>
      </ul>
      <h3>Back-End</h3>
      <ul>
        <li>MySQL</li>
        <li>Express</li>
        <li>Node</li>
        <li>Handlebars</li>
        <li>MongoDB</li>
        <li>REACT</li>
      </ul>
    </div>
  );
}
