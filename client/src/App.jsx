import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/HeroSection.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import { useState } from "react";
import { Contact } from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { translations } from "./data/translations.js";

// Constante de idioma inicial
const initialLanguage = "en";

console.log(translations);
// estilos
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      18.73deg,
      rgba(255, 0, 234, 0.234) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  // Estado para el modal de proyects
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  // Estados y funciones para el cambio de tema
  const [theme, setTheme] = useState("darkMode");

  const handleThemeChange = (theme) => {
    const newTheme = theme === false ? false : true;
    setTheme(newTheme);
    console.log(theme);
  };

  // Estados y funciones para el cambio de idioma

  const [language, setlanguage] = useState(initialLanguage);

  return (
    <>
      <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
        <Router>
          <Navbar handleThemeChange={handleThemeChange} />
          <Body>
            <Hero set='/hero' />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state && (
              <ProjectDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
          </Body>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
