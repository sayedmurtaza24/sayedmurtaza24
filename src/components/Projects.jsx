import React, { useState } from 'react'
import ProjectSlide from './ProjectSlide'
import { Pagination, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { projects } from '../projects'
import './Projects.css'

function Projects() {
    const [bgColor, setBgColor] = useState(projects[0].accentColor);

    return (
        <section className='projects-section' style={{ background: bgColor }}>
            <h1 className='projects-section__title'>Projects</h1>
            <div className='projects-section__centered'>
                <Swiper modules={[Pagination, Mousewheel]}
                    spaceBetween={150}
                    slidesPerView={1}
                    pagination={{ dynamicBullets: true }}
                    onSlideChange={(slide) => setBgColor(projects[slide.activeIndex].accentColor)}
                    mousewheel={{ sensitivity: .1, forceToAxis: true }}>
                    {projects.map(p => <SwiperSlide key={p.name}><ProjectSlide info={p} /></SwiperSlide>)}
                </Swiper>
            </div>
        </section>
    )
}

export default Projects