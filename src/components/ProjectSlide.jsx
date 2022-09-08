import React from 'react'
// import GitHubIcon from '../assets/github-icon.png'
// import WebsiteIcon from '../assets/website-icon.png'
import "./ProjectSlide.css"

function SarafApp({ info }) {
    return (
        <div className='project'>
            <h1 className='project__name'>{info.name}</h1>
            <div className='project__shots'>
                {info.images.map((img, i) =>
                    <img key={i} className={'project__image ' + (i === 0 ? 'left-align' : i === 2 ? 'right-align' : '')} src={img} alt={info.name} />
                )}
                <div className='project__shots-clone'>
                    {info.images.map((img, i) =>
                        <img key={i} className={'project__image ' + (i === 0 ? 'left-align' : i === 2 ? 'right-align' : '')} src={img} alt={info.name} />
                    )}
                </div>
            </div>
            <div className='project__details'>
                <p className='project__description'>{info.description}</p>
                <div className='project__tech-stack'>
                    {info.techStack.map(stack => <div key={stack} className='tech'>{stack}</div>)}
                </div>
            </div>
        </div>
    )
}

export default SarafApp