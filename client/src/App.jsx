import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
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
/* import { translations } from "./data/translations.js"; */
import { Body, Wrapper } from "./app.styles.js";
import { motion } from "framer-motion";

// Constante de idioma inicial
/* const initialLanguage = "en"; */

/* console.log(translations); */
// estilos
function App() {
  // Estado para el modal de proyects
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  // Estados y funciones para el cambio de tema
  const [theme, setTheme] = useState("darkMode");

  const handleThemeChange = (theme) => {
    const newTheme = theme === false ? false : true;
    setTheme(newTheme);
  };

  // Estados y funciones para el cambio de idioma

  /*  const [language, setlanguage] = useState(initialLanguage); */

  return (
    <>
      <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
        <Router>
          <Navbar handleThemeChange={handleThemeChange} />
          <Body
            as={motion.div}
            initial={{ opacity: 0.5, x: 5000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
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
