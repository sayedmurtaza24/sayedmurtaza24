import React from 'react'
import GithubIcon from '../assets/github-icon.png';
import LinkedInIcon from '../assets/linkedin-icon.png';
import MenuIcon from '../assets/menu-icon.png';
import MyPhoto from '../assets/my-photo.jpeg';
import Project from './Project';
import SarafLogo from '../assets/saraf-screenshot.jpg'
import "./Menu.css"

function MenuButton() {
  const projects = [{
    name: 'Saraf App',
    description: "Saraf App is a money exchange and money transfer management system built with VueJS, ExpressJS + NodeJS and PostgreSQL. Some of the main features of the application are user management, accounts management, journal, deposite box, printable receipts, bookmarking, dark mode, quick search, filtering and lots more...",
    pageLink: 'saraf-app.netlify.app',
    techStack: ['VueJS', 'ExpressJS', 'NodeJS', 'PrimeVue', 'PostgreSQL', 'Sequelize', 'JWT', 'AWS', 'Docker'],
    image: SarafLogo
  }];

  return (
    <div className="menu">
      <div className='btns-wrapper'>
        <div className="btn menu-btn">
          <img src={MenuIcon} alt="menu icon" />
        </div>
        <a href="https://www.linkedin.com/in/sayed-murtaza/">
          <div className="btn linkedin-btn">
            <img src={LinkedInIcon} alt="linkedin icon" />
          </div>
        </a>
        <a href="https://github.com/sayedmurtaza24">
          <div className="btn github-btn">
            <img src={GithubIcon} alt="github icon" />
          </div>
        </a>
      </div>
      <div className='menu-list'>
        <section className="about-section">
          <h2>About</h2>
          <p>Hi, I'm Murtaza. A passionate developer with skills beyond imagination!</p>
          <div className="about-section__divided">
            <div>
              <p>I started writing code more than 10 years ago, starting my journey with Visual Basic, I quickly moved on
                to C# since I found it more powerful and explored my way through Unity, XAML, SQL Databases and .Net based
                Windows Applications. Also along the journey I learned a great deal about photo and video editing and 3D modelling.
                With web apps growing I found myself in the Javascript world and learned HTML, CSS, Javascript with some
                popular frameworks such as React, Vue, Express and more...</p><p>In 2021 I moved to Sweden as a consequence of war in my country and joined salt, where I've learned more technologies,
                  agile methods, team work, mob programming and lots more...</p>
              <p>In my free time I enjoy playing competitive video games or board games, play indoor football, swim or maybe finish a season in netflix in one day!
              </p>
            </div>
            <img src={MyPhoto} className='about-section__photo' alt="murtaza" />
          </div>
        </section>
        <section>
          <h2>Projects</h2>
          <div className='abouts__projects-grid'>
            {projects.map(project => <Project key={project.name} project={project} /> )}
          </div>
        </section>
        <h2>CV</h2>
        <h2>Contact</h2>
      </div>
    </div>
  )
}

export default MenuButton