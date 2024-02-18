import React, {useState, useEffect} from "react";
import { Project} from "@/data/projectData";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

const ProjectCarousel = ({ projects }: { projects: Project[] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
        setImageIndex((index) => (index + 1) % 3);
    },  5000);

    return () => clearInterval(time);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center w-full h-screen gap-2 pb-2 mt-10">
      <Carousel 
        animation="slide"
        navButtonsAlwaysVisible={true}
        className="overflow-hidden max-w-4xl w-full"
        navButtonsProps={{
          style: {
            backgroundColor: 'gray',
            borderRadius: '100%',
          }
        }}
      >
        {projects.map((project, index) => (
          <section key={index}>
            <div className="flex flex-col items-center justify-center">
              <a href={project.url} target="_blank" rel="noreferrer">
                  <Image alt="project_image" src={project.imgUrl[imageIndex]}
                    style={{ minHeight: "0", height: "100%", minWidth: "0", width: "100%", border:'1px solid #BBD0E9', borderRadius:'10px' }}
                    className="max-h-96 max-w-full"
                  />
              </a>
            </div>
            <h4 className="text-xl md:text-2xl mt-3 font-semibold text-center">{project.title}</h4>
            <p className="text-base">{project.type}</p>
            <p className="text-xs text-gray-400">{project.period}</p>
            {project.stack.map(skill => (
              <span key={skill} className="mr-1 text-sm md:font-semibold md:text-base text-blue-500">
                {skill}{'  '}
              </span>
            ))}
             <div className="my-4 text-left">
          {project.descriptions.map((description, index) => (
            <p key={index} className="my-1 text-xs before:content-['🔍'] text-gray-600 dark:text-gray-400 md:text-sm">
              {description}
            </p>
          ))}
        </div>
          </section>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;
