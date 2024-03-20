import { DiCssdeck } from "react-icons/di";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Switcher from "./Switcher/Switcher";
import { translations } from "../data/translations";
import {
  ButtonContainer,
  GithubButton,
  MobileIcon,
  MobileMenu,
  MobileMenuLinks,
  Nav,
  NavContainer,
  NavItems,
  NavLink,
  NavLogo,
  Span,
  SpanLogo,
  SwitcherContainer,
} from "./navbar.styles";
import { motion } from "framer-motion";

const Navbar = ({ handleThemeChange }) => {
  const [open, SetOpen] = useState(false);

  const menuHandler = () => {
    SetOpen(!open);
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo
          as={motion.div}
          // animation
          initial={{ opacity: 0, scale: 0.5, x: -500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          // estilos
          style={{
            //styles
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20",
            cursor: "pointer",
          }}
          to='/'
        >
          <DiCssdeck size='3rem' />
          <Span>Brian</Span>
          <SpanLogo>Dev</SpanLogo>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={menuHandler} />
        </MobileIcon>
        <NavItems
          as={motion.div}
          // animation
          initial={{ opacity: 0, scale: 0.5, y: -1500 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}

          // animation
        >
          <NavLink href='#about'>
            {translations.es.HeaderNav.items.About}
          </NavLink>
          <NavLink href='#skills'>
            {translations.es.HeaderNav.items.Skills}
          </NavLink>
          <NavLink href='#experience'>
            {translations.es.HeaderNav.items.Experience}
          </NavLink>
          <NavLink href='#projects'>
            {translations.es.HeaderNav.items.Projects}
          </NavLink>
          <NavLink href='#education'>
            {translations.es.HeaderNav.items.Education}
          </NavLink>
          <NavLink href='#contact'>
            {translations.es.HeaderNav.items.Contact}
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton
            as={motion.div}
            // animation
            initial={{ opacity: 0, scale: 0.5, x: 2500 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href='https://www.github.com/brianleft28' target='_blank'>
              {translations.es.HeaderNav.githubButton.buttonGithub}
            </a>
          </GithubButton>
        </ButtonContainer>
        <SwitcherContainer
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5, x: 2500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Switcher onThemeChange={handleThemeChange} />
        </SwitcherContainer>
      </NavContainer>
      {open && (
        <MobileMenu
          open={open}
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5, x: 2500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <MobileMenuLinks href='#about' onClick={menuHandler}>
            {translations.es.HeaderNav.items.About}
          </MobileMenuLinks>
          <MobileMenuLinks href='#skills' onClick={menuHandler}>
            {translations.es.HeaderNav.items.Skills}
          </MobileMenuLinks>
          <MobileMenuLinks href='#experience' onClick={menuHandler}>
            {translations.es.HeaderNav.items.Skills}
          </MobileMenuLinks>
          <MobileMenuLinks href='#Projects' onClick={menuHandler}>
            {translations.es.HeaderNav.items.Projects}
          </MobileMenuLinks>
          <MobileMenuLinks href='#education' onClick={menuHandler}>
            {translations.es.HeaderNav.items.Education}
          </MobileMenuLinks>
          <MobileMenuLinks href='#education' onClick={menuHandler}>
            {translations.es.HeaderNav.items.Contact}
          </MobileMenuLinks>
          <GithubButton>
            <a href='https://github.com/Brianleft28' target='_blank'>
              {" "}
              Github Profile
            </a>
          </GithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};
export default Navbar;
