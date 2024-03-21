import { DiCssdeck } from "react-icons/di";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Switcher from "./Switcher/Switcher";
import { items, translations } from "../data/translations";
import {
  ButtonContainer,
  GithubButton,
  MobileIcon,
  /*   MobileMenu, */
  /*   MobileMenuLinks, */
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
import { SideBar } from "./Sidebar/sidebar.styles";

const Navbar = ({ handleThemeChange }) => {
  const [open, SetOpen] = useState(false);

  const menuHandler = () => {
    SetOpen(!open);
  };

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 10,
      transition: { delay: i * 0.2 },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <Nav>
      {/*  <SideBar /> */}
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
        {/*    <MobileIcon
          as={motion.div}
          // animation
          initial={{ opacity: 0, scale: 0.5, x: 800 }}
          animate={{ opacity: 1, scale: 1.5, x: -30, y: 25 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <FaBars onClick={menuHandler} />
        </MobileIcon> */}
        <NavItems
          as={motion.ul}
          variants={variants}
          initial='hidden'
          animate='visible'
        >
          {items.map((item, i) => (
            <NavLink
              key={i}
              as={motion.a}
              variants={variants}
              custom={i}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              href={item.href}
            >
              {item.text}
            </NavLink>
          ))}
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
      {/*  {open && (
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
      )} */}
    </Nav>
  );
};
export default Navbar;
