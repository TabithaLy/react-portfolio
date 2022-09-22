import React from 'react';
import Project from './Project';
import '../utils/main.css';

import AnimeBlog from '../utils/images/AnimeBlog.png';
import MoodyGamer from '../utils/images/MoodyGamer.png';
import EmployeeTracker from '../utils/images/EmployeeTracker.png';
import ProfileGenerator from '../utils/images/ProfileGenerator.png';
import NoteTaker from '../utils/images/NoteTaker.png';
import MakeREADME from '../utils/images/MakeREADME.png';

export default function Portfolio() {
  const cardContent = [
    {
      image: AnimeBlog,
      title: 'Anime Blog',
      linkg: 'https://github.com/TabithaLy/anime_blog',
      linkd: 'https://whispering-wildwood-37950.herokuapp.com/',
    },
    {
      image: MoodyGamer,
      title: 'Moody Gamer',
      linkg: 'https://github.com/TabithaLy/moody-gamer',
      linkd: 'https://tabithaly.github.io/moody-gamer/',
    },
    {
      image: EmployeeTracker,
      title: 'Employee Tracker',
      linkg: 'https://github.com/TabithaLy/employee-tracker',
    },
    {
      image: ProfileGenerator,
      title: 'Profile Generator',
      linkg: 'https://github.com/TabithaLy/team-profile-generator',
    },
    {
      image: NoteTaker,
      title: 'Note Taker',
      linkg: 'https://github.com/TabithaLy/note-taker',
      linkd: 'https://fathomless-earth-34037.herokuapp.com/',
    },
    {
      image: MakeREADME,
      title: 'Make README',
      linkg: 'https://github.com/TabithaLy/make-README',
    }
  ]
  return (
    <div className="page">
      <h2>Portfolio</h2>
      <Project cardContent={cardContent}/>
    </div>
  );
}
