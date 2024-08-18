import React from "react";
import styled from "styled-components";
import { forwardRef } from "react";
import { H1 } from "./styledComponents";
const ProjectsSection = forwardRef(function ProjectsSection(
  { text, title, image, ...props },
  ref
) {
  return (
    <div className="flex justify-center items-center" {...props} ref={ref}>
      <div>
        <H1> {title} </H1>
      </div>
      {/* <img src={image} alt="Project Image" /> */}
      <div>{text}</div>
    </div>
  );
});

export default ProjectsSection;
