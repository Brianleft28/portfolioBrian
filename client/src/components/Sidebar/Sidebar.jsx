import { Bg, SideBar } from "./sidebar.styles";
import Links from "./Links/Links.jsx";
import { useState } from "react";
import ToggleButton from "./ToggleButton/ToggleButton.jsx";
import { motion } from "framer-motion";
import { Wrapper } from "./Links/links.styles.js";
import { items } from "../../data/translations.js";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 35,
    },
  },
  closed: {
    clipPath: "circle(35px at 56px 59px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
/* A */

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variantsItem = {
    closed: {
      staggerChildren: 0.1,
    },
    open: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  };
  return (
    <SideBar as={motion.div} animate={open ? "open" : "closed"}>
      <Bg as={motion.div} variants={variants}>
        <Wrapper as={motion.div} variants={variantsItem}>
          {items.map((item, i) => (
            <Links
              as={motion.a}
              key={i}
              href={item.href}
              variants={variantsItem}
            >
              {item.text}
            </Links>
          ))}
        </Wrapper>
      </Bg>
      <ToggleButton setOpen={setOpen}>Button</ToggleButton>
    </SideBar>
  );
};
export default Sidebar;
