import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Bio } from "../data/constants.js";
import {
  Copyright,
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  SocialMediaIcon,
  SocialMediaIcons,
} from "./footer.styles.js";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Brian Nahuel Benegas</Logo>
        <Nav>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target='display'>
            <LinkedInIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2023 Brian Nahuel Benegas. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
