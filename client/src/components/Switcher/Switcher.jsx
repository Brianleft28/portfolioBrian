import { useState } from "react";
import styled from "styled-components";

const Switch = styled.div`
  width: 60px;
  height: 32px;
  background: #b3b3b3;
  border-radius: 32px;
  cursor: pointer;
  padding: 18px 10px;
  transition: 250ms ease-in-out;

  /* Add pseudo element */
  &:before {
    transition: 250ms ease-in-out;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 108px; // <!-- Make up for padding
    background: white;
    transform: translate(0, -50%);
  }
`;
const Label = styled.label`
  position: relative;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  font-size: 1rem;
  font-weight: 500;
  gap: 10px;
`;

const Input = styled.input`
  display: none;
  position: absolute;
  &:checked + ${Switch} {
    background: ${({ theme }) => theme.primary};

    &:before {
      transform: translate(20px, -14px);
    }
    &:hover {
      background: ${({ theme }) => theme.primary + 99};
    }
  }
`;

const Span = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const Switcher = ({ onThemeChange }) => {
  const [checked, setChecked] = useState(true); // store value
  const [darkMode, SetDarkMode] = useState(checked);

  const handleChecked = (e) => {
    setChecked(e.target.checked);
    SetDarkMode(checked ? false : true);
    onThemeChange(darkMode);
  };

  return (
    <div>
      <Label>
        <Span>{checked ? "DarkMode" : "LightMode"}</Span>
        <Input checked={checked} onChange={handleChecked} type='checkbox' />
        <Switch />
      </Label>
    </div>
  );
};
export default Switcher;
