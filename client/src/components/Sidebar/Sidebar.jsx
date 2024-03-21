import { Bg, SideBar } from "./sidebar.styles";
import { Links } from "./Links/Links.jsx";
import { ToggleButton } from "./ToggleButton/ToggleButton.jsx";
const Sidebar = () => {
  return (
    <SideBar>
      <Bg>
        <Links>asd</Links>
      </Bg>
      <ToggleButton></ToggleButton>
    </SideBar>
  );
};
export default Sidebar;
