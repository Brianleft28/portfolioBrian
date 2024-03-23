import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 30nppx;
  font-weight: 500;
  cursor: pointer;
  min-width: 70px;
  margin-left: 15px;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.bg};
  }
`;
