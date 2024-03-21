import { NavLink } from "./links.styles";
import { motion } from "framer-motion";
const Links = ({ children, href }) => {
  return (
    <NavLink
      href={href}
      as={motion.a}
      whileTap={{ scale: 1.5 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </NavLink>
  );
};
export default Links;
