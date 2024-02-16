type AboutDetail = About[];

export interface About {
    title: string;
    id: string;
    content: string;
}
  
export const AboutDetailData: AboutDetail = [
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
