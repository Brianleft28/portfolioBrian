import React from "react";
import { Bg } from "./loadingbg.styles";
import { motion } from "framer-motion";

const LoadingBg = ({ children }) => {
  return (
    <Bg
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <motion.div>{children}</motion.div>
    </Bg>
  );
};

export default LoadingBg;
