import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { useState } from "react";
import { FaBars, FaRegMoon } from "react-icons/fa";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  height: 50px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 640px) {
    padding: 0 6px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;

    right: 0;
    transform: translate(-100%, 50%);
    font-size: 25px;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const GithubButton = styled.button`
  border: 1px solid ${({ theme }) => theme.primary};

  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
  @media screen and (max-width: 648px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SpanLogo = styled.span`
  font-weight: bold;
  margin: 0 2px;
  padding: 0 2px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
`;

const Span = styled.span`
  font-weight: bolder;
  font-size: 18px;
  margin-right: 2px;
  color: ${({ theme }) => theme.text_primary};
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 0 6px 15px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
  opacity: ${({ open }) => (open ? "100%" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2 ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, SetOpen] = useState(false);

  const menuHandler = () => {
    SetOpen(!open);
  };

  const theme = useTheme();

  const [otherTheme, SetotherTheme] = useState(theme);

  const themeHandler = () => {
    SetotherTheme(!otherTheme);
    console.log(otherTheme);
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
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
          <NavLink onClick={themeHandler}>
            <FaRegMoon />
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton>
            <a href='https://www.github.com/brianleft28' target='_blank'>
              Github Profile
            </a>
          </GithubButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks href='#about' onClick={menuHandler}>
            About
          </MobileMenuLinks>
          <MobileMenuLinks href='#skills' onClick={menuHandler}>
            Skills
          </MobileMenuLinks>
          <MobileMenuLinks href='#experience' onClick={menuHandler}>
            Experience
          </MobileMenuLinks>
          <MobileMenuLinks href='#Projects' onClick={menuHandler}>
            Projects
          </MobileMenuLinks>
          <MobileMenuLinks href='#education' onClick={menuHandler}>
            Education
          </MobileMenuLinks>
          <MobileMenuLinks href='#education' onClick={menuHandler}>
            Contact
          </MobileMenuLinks>
          <GithubButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: `${theme.text_primary}`,
              width: "max-content",
            }}
          >
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
