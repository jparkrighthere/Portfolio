import { StaticImageData } from 'next/image';
import collegemate1 from '@/public/images/collegemate1.png';
import collegemate2 from '@/public/images/collegemate2.png';
import collegemate3 from '@/public/images/collegemate3.png';
import portfolio1 from '@/public/images/portfolio1.png';
import portfolio2 from '@/public/images/portfolio2.png';
import portfolio3 from '@/public/images/portfolio3.png';
import hyperledger1 from '@/public/images/hyperledger1.png';
import hyperledger2 from '@/public/images/hyperledger2.png';
import hyperledger3 from '@/public/images/hyperledger3.png';

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
        title: 'Hyperledger Fabric Asset Management System',
        stack: ['Java', 'Spring', 'Hyperledger Fabric'],
        period: '2023.06',
        type: 'Internship Project',
        imgUrl: [hyperledger1, hyperledger2, hyperledger3],
        heading: 'This project was a part of my internship at CreativeHill Inc. I was responsible for the development of a web application that enables users to securely transact assets through a Hyperledger Fabric chaincode, irrespective of whether their assets are personal or corporate. I utilized Spring and Java based Hyperledger Fabric and customized chaincode for the program\'s unique purposes. I also created a comprehensive application Manual for those who are unfamiliar with Hyperledger Fabric.',
        descriptions: [    
        'Implemented a web application that enables users to securely transact assets through a Hyperledger Fabric chaincode, irrespective of whether their assets are personal or corporate.',
            "Utilized Spring and Java based Hyperledger Fabric and customized chaincode for the program's unique purposes.",
            'Created a comprehensive application Manual for those who are unfamiliar with Hyperledger Fabric.'
        ],
        url: 'https://github.com/jparkrighthere/HyperledgerFabric-Custom'
    },
    {
        title: "Portfolio Website",
        stack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
        period: '2024.02',
        type: 'Personal Project',
        imgUrl: [portfolio1, portfolio2, portfolio3],
        heading: 'This personal project, which I started feeling the lack of frontend skills, has been a great opportunity for me to learn new technologies such as Next.js and Tailwind CSS from planning to deployment, while working on it alone. I have been continuously improving it based on feedback from other developers.',
        descriptions: [
            'Created a portfolio website to provide information about my projects and related details to showcase myself as a developer.',
            'Utilized Next.js and Tailwind CSS to build the website, and deployed it to Vercel.',
            'Implemented a responsive design to ensure the website is accessible across all devices.'
        ],
        url: 'https://github.com/jparkrighthere/Portfolio'
    },
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
        ],
        url: 'https://collegemate.app/'
    }
]
