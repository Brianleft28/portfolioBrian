import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  *::selection {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    padding: 25px 25px;
  }
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  height: 50px;
`;

export const NavLogo = styled(LinkR)`
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

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1080px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-55%, 100%);
    font-size: 25px;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  list-style: none;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  min-width: 70px;
  margin-left: 15px;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ButtonContainer = styled.div`
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

export const SwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
`;

export const GithubButton = styled.button`
  padding: "10px 16px";
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_primary};
  width: "max-content";
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
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.primary};
  }
  @media screen and (max-width: 648px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const SpanLogo = styled.span`
  font-weight: bold;
  margin: 0 2px;
  padding: 0 2px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
`;

export const Span = styled.span`
  font-weight: bolder;
  font-size: 18px;
  margin-right: 2px;
  color: ${({ theme }) => theme.text_primary};
`;

export const MobileMenu = styled.ul`
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

export const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2 ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
