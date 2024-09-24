import React from "react";
import styled from "styled-components";
import { forwardRef } from "react";
import { H1 } from "./styledComponents";

// Styled component for the card
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 20px;
  border: 1px solid;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Styled component for text
const Text = styled.div`
  margin-top: 10px; /* Add spacing between title and text */
  text-align: center; /* Center align the text */
`;

const ProjectsSection = forwardRef(function ProjectsSection(
  { text, title, image, ...props },
  ref
) {
  return (
    <Card {...props} ref={ref}>
      <H1>{title}</H1>
      <img src={image} />
      <Text>{text}</Text>
    </Card>
  );
});

export default ProjectsSection;
