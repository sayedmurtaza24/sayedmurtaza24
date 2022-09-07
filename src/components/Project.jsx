import React from 'react'
import GitHubIcon from '../assets/github-icon.png'
import WebsiteIcon from '../assets/website-icon.png'
import "./Project.css"

function Project({ project }) {
    return (
        <div className='project'>
            <img className='project__image' src={project.image} alt={project.name} />
            <div className='project__details'>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <h4>Tech Stack:</h4>
                <div className='project__tech-stack'>
                    {project.techStack.map(stack => <div className='tech'>{stack}</div>)}
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