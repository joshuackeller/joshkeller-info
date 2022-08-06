import Image from "next/future/image";
import { motion } from "framer-motion";

const DogePage = () => {
  const doges = [];
  for (let x = 0; x < 1000; x++) {
    doges.push(x);
  }

  return (
    <div className="flex flex-wrap justify-center">
      {doges?.map((doge) => (
        <motion.div
          key={doge}
          className="w-[100px] -m-5"
          animate={{
            rotate: [null, 90, 180, 270, 360],
          }}
          transition={{
            ease: "linear",
            duration: 2,
            delay: 0,
            stiffness: 0,
            repeat: Infinity,
          }}
        >
          <Image src="/doge.png" height={100} width={100} alt="doge" />
        </motion.div>
      ))}
    </div>
  );
};

export default DogePage;
