import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";

const Document = styled.img`
  height: 70px;
  width: fit-content;
  background-color: transparent;
  border-radius: 10px;
  display: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

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

  &:hover ${Document} {
    display: flex;
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

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary + 80};

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
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
  color: ${({ theme }) => theme.text_primary + 99};
`;

const Sapn = styled.span`
  overflow: hidden;
  display: -webkit-box;
  text-overflow: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  max-width: 100%;
  text-overflow: ellipsis;
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Logo src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>{education.grade}</Grade>
      <Description>
        <Sapn>{education.desc}</Sapn>
      </Description>
    </Card>
  );
};

export default EducationCard;
