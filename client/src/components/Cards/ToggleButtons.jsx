import React from "react";
import styled from "styled-components";

const ToggleButton = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  border-radius: 6px;

  ${({ active, theme }) =>
    active &&
    `    
    background-color: ${theme.primary + 20};  
  `}

  &:hover {
    background-color: ${({ theme }) => theme.primary + 8};
  }

  @media screen and (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const ToggleButtons = (active, onClick, child) => {
  return (
    <ToggleButton isactive={active} onClick={onClick}>
      {child}
    </ToggleButton>
  );
};

export default ToggleButton;
