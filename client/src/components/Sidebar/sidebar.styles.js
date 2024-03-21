import styled from "styled-components";

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.bgLight};
  color: ${({ theme }) => theme.text_primary};
`;

export const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  background-color: ${({ theme }) => theme.bgLight};
`;
