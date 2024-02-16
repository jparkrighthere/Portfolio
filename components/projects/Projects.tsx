import React from 'react';
import ProjectCarousel from './ProjectCarousel';
import { ProjectDetailData, Project } from '@/data/projectData';

const Projects = () => {
    return (
        <section
        id="projects"
        className="container relative flex flex-col items-center h-full max-w-full gap-20 py-20 mx-auto overflow-hidden justify-evenly md:flex-row"
        >
            <h3 className="absolute text-2xl tracking-widest uppercase top-10 md:top-14">Projects</h3>
            <div className="flex flex-col gap-0">
                {ProjectDetailData.map((project: Project, index: number) => (
                    <div key={index}>
                        <ProjectCarousel project={project} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

