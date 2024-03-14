import React, { useState } from "react";
import styled from "styled-components";
import ToggleButton from "./Cards/ToggleButtons.jsx";
import ProjectCard from "./Cards/ProjectCard.jsx";
import { projects } from "../data/constants.js";

const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
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
  margin: 22px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <>
      <Container id='projects'>
        <Wrapper>
          <Tittle>Projects</Tittle>
          <Desc>
            I have worked on a wide range of projects. From web apps to android
            apps. Here are some of my projects.
          </Desc>

          <ToggleGroup>
            {toggle === "all" ? (
              <ToggleButton active onClick={() => setToggle("all")}>
                All
              </ToggleButton>
            ) : (
              <ToggleButton onClick={() => setToggle("all")}>All</ToggleButton>
            )}
            <Divider />
            {toggle === "web app" ? (
              <ToggleButton active onClick={() => setToggle("web app")}>
                Web App's
              </ToggleButton>
            ) : (
              <ToggleButton onClick={() => setToggle("web app")}>
                Web App's
              </ToggleButton>
            )}
            <Divider />
            {toggle === "android app" ? (
              <ToggleButton active onClick={() => setToggle("android app")}>
                Android App's
              </ToggleButton>
            ) : (
              <ToggleButton onClick={() => setToggle("android app")}>
                Android App's
              </ToggleButton>
            )}
            <Divider />
            {toggle === "machine learning" ? (
              <ToggleButton
                active
                onClick={() => setToggle("machine learning")}
              >
                Machine Learning
              </ToggleButton>
            ) : (
              <ToggleButton onClick={() => setToggle("machine learning")}>
                Machine Learning
              </ToggleButton>
            )}
          </ToggleGroup>

          <CardContainer>
            {toggle === "all" &&
              projects.map((project) => <ProjectCard project={project} />)}
            {projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard project={project} />
              ))}
          </CardContainer>
        </Wrapper>
      </Container>
      ;
    </>
  );
};

export default Projects;
