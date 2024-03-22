import styled from "styled-components";

export const SideBar = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  color: black;
  @media screen and (max-width: 1080px) {
    display: flex;
  }
`;

export const Bg = styled.div`
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.primary};
`;
