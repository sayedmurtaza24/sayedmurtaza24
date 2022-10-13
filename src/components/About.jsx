import React from 'react'
import MyPhoto from '../assets/my-photo.jpeg';
import './About.css'

function About() {
    return (
        <section className="about-section">
            <div className='about-section__centered'>
                <h1 className='about-section__title'>WHO AM I?</h1>
                <img src={MyPhoto} className='about-section__photo' alt="murtaza" />
                <div className='about-section__text'>
                    <span>
                        <p className='intro-text-1'>Hi, I'm Murtaza.</p>
                        <p className='intro-text-2'>A passionate developer with skills beyond imagination!</p>
                    </span>
                    <p>I started writing code more than 10 years ago, starting my journey with Visual Basic, I quickly moved on
                        to C# since I found it more powerful and explored my way through Unity, XAML, SQL Databases and .Net based
                        Windows Applications. Also along the journey I learned a great deal about photo and video editing and 3D modelling.
                    </p><p>With web apps growing I found myself in the Javascript world and learned HTML, CSS, Javascript with some
                        popular frameworks such as React, Vue, Express and more...</p><p>In 2021 I moved to Sweden as a consequence of war in my country and joined salt, where I've learned more technologies,
                            agile methods, team work, mob programming and lots more...</p>
                    <p>In my free time I enjoy playing competitive video games or board games, play indoor football, swim or maybe finish a season in netflix in one day!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About