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

const Navbar = ({ handleThemeChange }) => {
  const [open, SetOpen] = useState(false);

  const menuHandler = () => {
    SetOpen(!open);
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo
          style={{
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
        <NavItems>
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
          <GithubButton>
            <a href='https://www.github.com/brianleft28' target='_blank'>
              {translations.es.HeaderNav.githubButton.buttonGithub}
            </a>
          </GithubButton>
        </ButtonContainer>
        <SwitcherContainer>
          <Switcher onThemeChange={handleThemeChange} />
        </SwitcherContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
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
