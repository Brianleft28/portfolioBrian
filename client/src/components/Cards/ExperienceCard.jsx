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

const Logo = styled.img`
  height: 50px;
  width: 50px;
  background-color: transparent;
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
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary + 80};

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Duration = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${(theme) => theme.text_primary + 99};
`;

const ExperienceCard = ({ experiences }) => {
  return (
    <Card>
      <Top>
        <Logo src={experiences.img} />
        <Body>
          <Role>{experiences.role}</Role>
          <Company>{experiences.company}</Company>
          <Duration>{experiences.date}</Duration>
        </Body>
      </Top>
      <Description>{experiences.desc}</Description>
      {experiences.doc && (
        <a target='new' href={experiences.doc}>
          <Document />
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
