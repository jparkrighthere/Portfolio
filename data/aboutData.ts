type AboutDetail = AboutData[];

export interface AboutData {
    title: string;
    id: string;
    content: string;
}
  
export const AboutDetailData: AboutDetail = [
    {
      title: 'Value Feedback',
      id: 'intro',
      content:
      'I prioritize feedback and code reviews to ensure the creation of high-quality, understandable code that enhances collaboration efficiency.',
    },
    {
      title: 'Prioritize User Experience',
      id: 'intro',
      content:
        'I focus on delivering seamless user experiences by optimizing both frontend interactions and backend functionality.',
    },
    {
      title: 'Passionate about Technology',
      id: 'intro',
      content:
      'I consistently learn and explore areas such as clean code, optimization, and various collaboration tools to enhance service quality.',
    },
    {
      title: 'Learning & Sharing Knowledge',
      id: 'intro',
      content:
      'I am committed to continuously learning and sharing knowledge to foster growth and contribute to the advancement of technology.',
    },
    {
        title: 'University of Wisconsin-Madison',
        id: 'education',
        content: `Bachelor of Science in Computer Science (2022-2024)`,
    },
    {
        title: 'University of Missouri-Kansas City',
        id: 'education',
        content: `Bachelor of Science in Computer Science (2018-2020)`,
    },
    {
        title: 'Languages',
        id: 'skill',
        content: `JavaScript, TypeScript, Python, Java, C, R, SQL`,
    },
    {
        title: 'Frameworks & Libraries',
        id: 'skill',
        content: 'Spring, React, React Native, Next.js, Node.js, Express.js, HTML, CSS, Tailwind CSS, Bootstrap, Jest',
    },
    {
        title: 'Tools & Technologies',
        id: 'skill',
        content: 'Git, GitHub, Docker, Azure, MySQL, Figma, Postman, RStudio, Jupyter Notebook, Hyperledger Fabric, Azure Cosmos DB',
    }

];