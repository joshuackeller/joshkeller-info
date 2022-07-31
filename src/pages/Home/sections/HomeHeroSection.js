import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

const HomeHeroSection = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div className="h-80" ref={constraintsRef}>
      <motion.div
        drag
        className="item text-white text-8xl bg-jk-green font-black p-10 w-min "
      >
        welcome
      </motion.div>
    </motion.div>
  );
};

export default HomeHeroSection;
