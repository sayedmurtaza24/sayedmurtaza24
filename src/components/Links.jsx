import React from 'react'
import GithubIcon from '../assets/github-icon.png';
import LinkedInIcon from '../assets/linkedin-icon.png';
// import MenuIcon from '../assets/menu-icon.png';
import "./Links.css"

function MenuButton() {
  return (
    <div className="menu">
      <div className='btns-wrapper'>
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
    </div>
  )
}

export default MenuButton