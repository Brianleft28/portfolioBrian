import styled from "styled-components";

export const Bg = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
