import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Project } from "@/data/projectData";
import Image from "next/image";

const ProjectCarousel = ({ project }: { project: Project }) => {
  const { title, descriptions, stack, period, type, imgUrl, heading } = project;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>{title}</h2>
      <Slider {...settings}>
        {imgUrl.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={`${title} - Slide ${index}`} width={500} height={300} />
          </div>
        ))}
      </Slider>
      <p>{heading}</p>
      <ul>
        {descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      <p>Stack: {stack.join(", ")}</p>
      <p>Period: {period}</p>
      <p>Type: {type}</p>
    </div>
  );
};

export default ProjectCarousel;

