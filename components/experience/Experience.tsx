import React from 'react';
import ExperienceBox from './ExperienceBox';
import { ExperienceDetailData } from '@/data/experienceData';

const Experience = () => {
    return (
        <section
            id='experience'
            className='relative flex flex-col items-center justify-center h-screen gap-20'
        >
            <h3 className='absolute text-2xl tracking-widest uppercase top-5 md:top-10'>Experience & Education</h3>
            {ExperienceDetailData.map((data, index) => (
                <ExperienceBox key={index} experience={data} index={index} />
            ))}
        </section>
    )
}

export default Experience;