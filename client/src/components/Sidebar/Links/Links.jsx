import { NavLink } from "./links.styles";
import { motion } from "framer-motion";

const Links = ({ children, href, variants }) => {
  return (
    <NavLink
      href={href}
      as={motion.a}
      whileTap={{ scale: 1.5 }}
      variants={variants}
    >
      {children}
    </NavLink>
  );
};
export default Links;
