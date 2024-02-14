import React, { useState, useTransition } from 'react';
import Image from 'next/legacy/image';
import { motion } from 'framer-motion';
import AboutDetail from '@/components/about/AboutDetail';
import { AboutDetailData } from '@/data/aboutData';

const About = () => {
    return (
        <section
        id='about'
        className='container relative flex flex-col-reverse items-center justify-center h-screen gap-10 md:flex-row'>
            <h3 className='absolute text-2xl tracking-widest uppercase top-5 md:top-10'>About</h3>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className='flex flex-col w-full md:w-2/3'>

                <div className='flex justify-center gap-20'>
                    <div>
                        <h2 className='mb-5 text-3xl text-gray-500'>EDUCATION</h2>
                        <div className='flex flex-col gap-2 lg'>
                            {AboutDetailData.filter(data => data.id === 'education').map((data, index) => (
                                <AboutDetail key={index} data={data} />
                            ))}
                        </div>
                    </div>

                    <div className='mr-10'>
                        <h2 className='mb-5 text-3xl text-gray-500'>SKILLS</h2>
                        <div className='flex flex-col gap-8 lg'>
                            {AboutDetailData.filter(data => data.id === 'skill').map((data, index) => (
                                <AboutDetail key={index} data={data} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: '50%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className='relative w-40 h-40 overflow-hidden md:w-96 md:h-96'
            >
                <Image
                    src='/images/profile.png'
                    alt='Jeonghyeon Park'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                />
            </motion.div>
        </section>
    )
}

export default About;
