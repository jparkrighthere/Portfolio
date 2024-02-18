import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/data/experienceData';

type Props = {
    experience: Experience;
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
            <h3 className="text-xs md:text-sm">{experience.when}</h3>
            {/* {experience.retroUrl ? (
            <a href={experience.retroUrl} target="_blank" className="text-sm font-bold md:text-lg">
                {experience.program}
            </a>
            ) : ( */}
            <h2 className="text-sm font-bold md:text-lg text-blue-500">{experience.at}</h2>
            <p className="text-xs md:text-sm">{experience.what}</p>
        </motion.div>
    );
};

export default ExperienceBox;

