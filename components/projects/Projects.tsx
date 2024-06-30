import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import { ProjectDetailData } from '@/data/projectData';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const Projects = () => {
    const style = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section
            id='projects'
            className='relative flex flex-col items-center justify-center h-screen gap-20 md:flex-row'
        >
            <h3 className='absolute text-2xl tracking-widest uppercase top-5 md:top-10'>Projects</h3>
            <div className="w-full h-full">
                <ProjectCarousel
                {...style}
                projects={ProjectDetailData} />
            </div>
        </section>
    );
};

export default Projects;
    