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
import { useState, useEffect } from "react";
import { Contact } from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
/* import { translations } from "./data/translations.js"; */
import { Body, Wrapper } from "./app.styles.js";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { HashLoader } from "react-spinners";
import LoadingBg from "./components/LoadingBgAnimation/LoadingBg.jsx";
import LazyLoading from "./components/LazyObserver/LazyObserver.jsx";
// Constante de idioma inicial
/* const initialLanguage = "en"; */

/* console.log(translations); */
// estilos
function App() {
  // Hooks para el modal de proyects
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  // Hooks para el cambio de tema
  const [theme, setTheme] = useState("darkMode");
  const handleThemeChange = (theme) => {
    const newTheme = theme === false ? false : true;
    setTheme(newTheme);
  };
  // Hooks para el loader
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  //////////////////////////////
  // Hooks para el lazy loading
  //////////////////////////////

  // Estados y funciones para el cambio de idioma

  /*  const [language, setlanguage] = useState(initialLanguage); */

  return (
    <>
      <ThemeProvider theme={theme === true ? lightTheme : darkTheme}>
        <Router>
          {loading ? (
            <LoadingBg>
              <HashLoader color='#854CE6' size={100} />
            </LoadingBg>
          ) : (
            <Body>
              <Sidebar />
              <Navbar handleThemeChange={handleThemeChange} />
              <Hero set='/hero' />
              <Wrapper>
                <LazyLoading Component={Skills} />
                <LazyLoading Component={Experience} />
              </Wrapper>
              <LazyLoading
                Component={Projects}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />

              <Wrapper>
                <LazyLoading Component={Education} />
                <LazyLoading Component={Contact} />
              </Wrapper>

              <Footer />
              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </Body>
          )}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
