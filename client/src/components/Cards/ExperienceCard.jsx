import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3 ease-in-out;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
  border: 1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15);
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const Logo = styled.div`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;

  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Role = styled.div`
  font-size: 18px;
`;

const Company = styled.div``;

const Duration = styled.div``;

const ExperienceCard = ({ experiences }) => {
  return (
    <Card>
      <Top>
        <Logo src={experiences.img} />
        <Body>
          <Role>{experiences.role}</Role>
          <Company>{experiences.commpany}</Company>
          <Duration>{experiences.date}</Duration>
        </Body>
      </Top>
      <Descripcion></Descripcion>
      {experiences.doc && (
        <a target='new' href={experiences.doc}>
          <Document />
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
