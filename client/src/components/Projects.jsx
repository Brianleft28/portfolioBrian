import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;

  /*  @media screen and (max-width: ) {
    
  } */
`;

const Tittle = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  padding: 0 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;

  ${({ active }) =>
    active &&
    `
    background-color: ${({ theme }) => theme.primary + 20};  
  `}

  &:hover {
    background-color: ${({ theme }) => theme.primary + 15};
    color: white;
  }
`;

const Projects = () => {
  return (
    <>
      <Container id='projects'>
        <Wrapper>
          <Tittle>Projects</Tittle>
          <Desc>
            Here some of my projects, can u check the code on my Github Profile.
          </Desc>
          {
            <ToggleGroup>
              <ToggleButton>web</ToggleButton>
            </ToggleGroup>
          }
        </Wrapper>
      </Container>
      ;
    </>
  );
};

export default Projects;
