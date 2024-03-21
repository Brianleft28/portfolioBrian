import styled from "styled-components";

export const Button = styled.button`
  width: 70px;
  height: 70px;
  font-size: 20px;
  border-radius: 50%;
  position: fixed;
  top: 25px;
  left: 47px;
  color: ${({ theme }) => theme.white};
  background-color: transparent;
  border: none;
  z-index: 12;
`;
