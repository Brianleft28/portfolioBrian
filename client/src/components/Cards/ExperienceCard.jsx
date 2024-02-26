import React from "react";
import styled from "styled-components";
import experience from "../../data/constants.js";

const Card = styled.div`
  width: 650px;
  height: 250px;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Top>
        <Logo src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.commpany}</Company>
          <Duration>{experience.date}</Duration>
        </Body>
      </Top>
      {/*  <Descripcion></Descripcion> */}
      {/*   {experience.doc && (
        <a target='new' href={experience.doc}>
          <Document />
        </a>
      )} */}
    </Card>
  );
};

export default ExperienceCard;
