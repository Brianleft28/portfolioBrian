/* eslint-disable no-unused-vars */
import { ToggleButton } from "./togglebuttons.styles";

const ToggleButtons = (active, onClick, child) => {
  return (
    <ToggleButton isactive={active} onClick={onClick}>
      {child}
    </ToggleButton>
  );
};

export default ToggleButton;
