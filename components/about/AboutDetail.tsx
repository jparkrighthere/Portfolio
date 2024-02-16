import React from 'react';
import type { About } from '../../data/aboutData';

type Props = {
    data: About;
};

const AboutDetail = ({ data }: Props) => {
    return (
        <div>
            <p className="text-sm font-bold text-blue-500 md:text-2xl mb-2">{data.title}</p>
            <p className="text-xs md:text-base">{data.content}</p>
        </div>
    );
};

export default AboutDetail;
