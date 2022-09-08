import React from 'react'
import GitHubIcon from '../assets/github-icon.png'
import WebsiteIcon from '../assets/website-icon.png'
// import SarafLogo from '../assets/saraf-screenshot.jpg'
import "./Project.css"

function Project({ project }) {
    // const projects = [{
    //   name: 'Saraf App',
    //   description: "Saraf App is a money exchange and money transfer management system built with VueJS, ExpressJS + NodeJS and PostgreSQL. Some of the main features of the application are user management, accounts management, journal, deposite box, printable receipts, bookmarking, dark mode, quick search, filtering and lots more...",
    //   pageLink: 'saraf-app.netlify.app',
    //   techStack: ['VueJS', 'ExpressJS', 'NodeJS', 'PrimeVue', 'PostgreSQL', 'Sequelize', 'JWT', 'AWS', 'Docker'],
    //   image: SarafLogo
    // }];
  
    return (
        <div className='project'>
            <img className='project__image' src={project.image} alt={project.name} />
            <div className='project__details'>
                <h2>{project.name}</h2>
                <p className='project__description'>{project.description}</p>
                <h4>Tech Stack:</h4>
                <div className='project__tech-stack'>
                    {project.techStack.map(stack => <div key={stack} className='tech'>{stack}</div>)}
                </div>
                <h4>Links:</h4>
                <div className='project__links'>
                    <div className='link page-link'>
                        <img src={WebsiteIcon} alt="github icon" width="20px" height="20px" />
                        <p>Demo Website</p>
                    </div>
                    <div className='link github-link'>
                        <img src={GitHubIcon} alt="github icon" width="20px" height="20px" />
                        <p>GitHub Repo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project