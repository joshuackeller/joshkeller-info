import { useRef } from "react";
import { motion } from "framer-motion";

const HomeHeroSection = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div className="h-screen flex" ref={constraintsRef}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={1}
        className="item text-white font-inktrap shadow-xl text-7xl md:text-8xl bg-jk-green font-bold p-8 md:p-10 w-min mx-auto my-auto"
      >
        josh keller
      </motion.div>
    </motion.div>
  );
};

export default HomeHeroSection;
