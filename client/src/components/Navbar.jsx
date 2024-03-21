import { DiCssdeck } from "react-icons/di";
import { useState } from "react";
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
          <DiCssdeck
            size='3rem'
            color={handleThemeChange === false ? "#be1adb" : "#854CE6"}
          />
          <Span>Brian</Span>
          <SpanLogo>Dev</SpanLogo>
        </NavLogo>

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
    </Nav>
  );
};
export default Navbar;
