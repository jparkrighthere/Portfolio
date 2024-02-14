import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceData } from '@/data/experienceData';

type Props = {
    experience: ExperienceData;
    index: number;
};

const ExperienceBox = ({experience, index}: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: '-100' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 * (index + 1) }}
            className="w-full p-4 text-center h-fit"
        >
            <h3 className="text-xs md:text-sm">{experience.company}</h3>
            <h2 className="text-sm text-blue-500 font-bold md:text-lg">{experience.role}</h2>
            <p className="text-xs md:text-sm">{experience.period}</p>
            <ul className="text-md mt-7 text-left">
                {experience.content.map((point, idx) => (
                    <li className="mb-1.5" key={idx}>{point}</li>
                ))}
            </ul>
        </motion.div>
    );

};

export default ExperienceBox;
