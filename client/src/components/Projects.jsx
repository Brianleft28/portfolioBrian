import { useState } from "react";
import ToggleButton from "./Cards/ToggleButtons.jsx";
import ProjectCard from "./Cards/ProjectCard.jsx";
import { projects } from "../data/constants.js";
import {
  CardContainer,
  Container,
  Desc,
  Divider,
  Tittle,
  ToggleButtonGroup,
  Wrapper,
} from "./projects.styles.js";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id='projects'>
      <Wrapper>
        <Tittle>Projects</Tittle>
        <Desc>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value='all' onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value='all' onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value='web app'
              onClick={() => setToggle("web app")}
            >
              WEB APP
            </ToggleButton>
          ) : (
            <ToggleButton value='web app' onClick={() => setToggle("web app")}>
              WEB APP
            </ToggleButton>
          )}
          <Divider />
          {toggle === "android app" ? (
            <ToggleButton
              active
              value='android app'
              onClick={() => setToggle("android app")}
            >
              ANDROID APP
            </ToggleButton>
          ) : (
            <ToggleButton
              value='android app'
              onClick={() => setToggle("android app")}
            >
              ANDROID APP
            </ToggleButton>
          )}
          <Divider />
          {toggle === "machine learning" ? (
            <ToggleButton
              active
              value='machine learning'
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          ) : (
            <ToggleButton
              value='machine learning'
              onClick={() => setToggle("machine learning")}
            >
              MACHINE LEARNING
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
