import { StaticImageData } from 'next/image';
import collegemate1 from '@/public/images/collegemate1.png';
import collegemate2 from '@/public/images/collegemate2.png';
import collegemate3 from '../public/images/collegemate3.png';

type ProjectData = Project[];


export interface Project {
    title: string;
    descriptions: string[];
    stack: string[];
    period: string;
    type: string;
    imgUrl: StaticImageData[];
    url?: string;
    heading: string;
}

export const ProjectDetailData: ProjectData = [
    {
        title: 'CollegeMate',
        stack: ['TypeScript', 'Node.js', 'Express.js', 'Azure Cosmos DB'],
        period: '2023.02 - Present',
        type: 'Team Project',
        imgUrl: [collegemate1, collegemate2, collegemate3],
        heading: 'CollegeMate is a college community app designed exclusively for University of Wisconsin-Madison students. Our mission is to streamline academic planning, foster peer connections, and promote a supportive campus atmosphere, ensuring students thrive both academically and socially.',
        descriptions: [
            'Collaborating with a cross-functional team comprising 8 members, including front-end developers and a designer.',
            'Developing a dynamic platform empowering students to craft and personalize their schedules, facilitating easy download as images or wallpapers, and seamless sharing capabilities within the application.',
            'Utilizing Express.js and TypeScript to architect and build APIs with Azure Cosmos DB for data management.'
        ]
    },
    {
        title: 'I&apos;m Software Developer',
        stack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
        period: '2024.02 - Present',
        type: 'Personal Project',
        imgUrl: [collegemate1, collegemate2, collegemate3],
        heading: 'This personal project, which I started feeling the lack of frontend skills, has been a great opportunity for me to learn new technologies such as Next.js and Tailwind CSS from planning to deployment, while working on it alone. I have been continuously improving it based on feedback from other developers.',
        descriptions: [
            'To showcase myself as a developer, I created a portfolio website to provide information about my projects and related details.',
            'Utilized Next.js and Tailwind CSS to build the website, and deployed it to Vercel.',
            'Implemented a responsive design to ensure the website is accessible across all devices.'
        ]
    }
]
