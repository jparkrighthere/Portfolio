type ExperienceData = Experience[];

export interface Experience {
    at: string;
    when: string;
    what: string;
    content: string[];
  }
  
export const ExperienceDetailData: ExperienceData = [
    {
        at: 'CreativeHill Inc.',
        what: 'Backend & Blockchain Developer Intern',
        when: '2023.06 - 2023.08',
        content: [
            '- Contributed to the development of the UNICEF Korea website API, facilitating hassle-free donations and was responsible for approximately 60% of the API development, allowing users to donate without additional sign-up, utilizing Spring framework.',
            '- Completed the basic training in Hyperledger Fabric and Docker, subsequently creating a comprehensive Hyperledger Fabric Manual, which serves for current employees and incoming interns, covering basics of the framework’s functionalities.',
            '- Collaborated in the conceptualization of fundamental APIs for a blockchain-based platform by defining the core APIs that underpin the platform\'s functionality.',
        ],
        
    },
    {
        at: 'University of Wisconsin-Madison',
        what: 'Bachelor of Science in Computer Science',
        when: '2022.09 - present',
        content: [
        'Relevant Courses: Introduction to Algorithms, Introduction to Operating Systems, Building User Interfaces, Data Structures, Machine Organization & C Programming, Introduction to Computer Engineering, Introduction to Big Data Systems, Applied Statistics for Engineers',
        ]
    },
    {
        at: 'University of Missouri-Kansas City',
        what: 'Bachelor of Science in Computer Science',
        when: '2018.08 - 2020.05',
        content: [
            ''
        ]
    },
];

