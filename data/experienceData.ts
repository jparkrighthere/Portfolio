type ExperienceDetail = ExperienceData[];

export interface ExperienceData {
    company: string;
    period: string;
    role: string;
    content: string[];
  }
  
export const ExperienceDetailData: ExperienceDetail = [
    {
        company: 'CreativeHill Inc.',
        role: 'Backend & Blockchain Developer Intern',
        period: '2023.06 - 2023.08',
        content: [
            '- Contributed to the development of the UNICEF Korea website API, facilitating hassle-free donations and was responsible for approximately 60% of the API development, allowing users to donate without additional sign-up, utilizing Spring framework.',
            '- Completed the basic training in Hyperledger Fabric and Docker, subsequently creating a comprehensive Hyperledger Fabric Manual, which serves for current employees and incoming interns, covering basics of the framework’s functionalities.',
            '- Collaborated in the conceptualization of fundamental APIs for a blockchain-based platform by defining the core APIs that underpin the platform\'s functionality.',
        ],
    },
];
