import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";

const Card = styled.div`
  width: 330px;
  height: 450px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.3);
`;

const ProjectCard = ({ project }) => {
  return (
    <>
      <Card>
        {/*  <Image src={projects.image} />
        <Tags></Tags>
        <Details></Details>
        <Members></Members> */}
      </Card>
    </>
  );
};

export default ProjectCard;
