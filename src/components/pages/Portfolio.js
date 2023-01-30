import React from 'react';
import Project from './Project';
import '../utils/main.css';

import AnimeBlog from '../utils/images/AnimeBlog.png';
import MoodyGamer from '../utils/images/MoodyGamer.png';
import EmployeeTracker from '../utils/images/EmployeeTracker.png';
import ProfileGenerator from '../utils/images/ProfileGenerator.png';
import NoteTaker from '../utils/images/NoteTaker.png';
// import MakeREADME from '../utils/images/MakeREADME.png';
import OSBS from '../utils/images/OSBS.png';

export default function Portfolio() {
  const cardContent = [
    {
      image: OSBS,
      title: 'One Stop Bop Shop',
      linkg: 'https://github.com/TabithaLy/one-stop-bop-shop',
      linkd: 'https://one-stop-bop-shop.herokuapp.com/',
      description: 'This project is a MERN stack application with STRIPE functionality and MaterialUI styling for a make-believe Vinyl Shop.',
    },
   {
      image: AnimeBlog,
      title: 'Anime Blog',
      linkg: 'https://github.com/TabithaLy/anime_blog',
      linkd: 'https://whispering-wildwood-37950.herokuapp.com/',
      description: 'This project is an anime review board where users can post and delete their opinions on anime they watch. It implements JIKAn API for the anime information, Bulma CSS for the styling, and NodeJS, MySQL2, Express, and Handlebars for the build.'
    },
    {
      image: NoteTaker,
      title: 'Note Taker',
      linkg: 'https://github.com/TabithaLy/note-taker',
      linkd: 'https://fathomless-earth-34037.herokuapp.com/',
      description: 'The purpose of this project is to use Express.js to build the back end for a note taking application that saves and retrieves data from a JSON file.'
    },
    {
      image: MoodyGamer,
      title: 'Moody Gamer',
      linkg: 'https://github.com/TabithaLy/moody-gamer',
      linkd: 'https://tabithaly.github.io/moody-gamer/',
      description: 'This project is an app to suggest what games a user should play depending on astrological signs and their selected mood. The app will implement an Aztro AstrologyAPI and the RAWG video game API to get parameters for video game selection, while the user mood will be self-selected.',
    },
    {
      image: EmployeeTracker,
      title: 'Employee Tracker',
      linkg: 'https://github.com/TabithaLy/employee-tracker',
      linkd: 'https://drive.google.com/file/d/12UlEXIVPPGB9BVs0mAf7I7vzAUmuN0qp/view',
      description: 'The purpose of this challenge is to build a command line application from scratch to manage the employee database for a company using Node.js, Inquirer, and MySQL.'
    },
    {
      image: ProfileGenerator,
      title: 'Profile Generator',
      linkg: 'https://github.com/TabithaLy/team-profile-generator',
      linkd: 'https://drive.google.com/file/d/1R42LpxedQH1jxAZIZC_-I66nwSYqQhuR/view',
      description: 'The purpose of this project was to dynamically generate an HTML document that displays team member information provided by user input into the command line.'
    },
  ]
  return (
    <div className="page">
      <h2>Portfolio</h2>
      <Project cardContent={cardContent}/>
    </div>
  );
}
