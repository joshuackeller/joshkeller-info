import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const IMAGES = [
  { name: "aws.png" },
  { name: "cloudflare.png" },
  { name: "deno.png" },
  { name: "docker.webp" },
  { name: "dynamo.png" },
  { name: "github.webp" },
  { name: "lambda.png" },
  { name: "mongodb.png" },
  { name: "mysql.png" },
  { name: "next.png" },
  { name: "postgres.png" },
  { name: "prisma.png" },
  { name: "python.png" },
  { name: "react.png" },
  { name: "rust.png" },
  { name: "tailwind.png" },
  { name: "tanstack.svg" },
  { name: "typescript.png" },
];

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement?.offsetLeft,
    top: referenceElement?.offsetTop,
    width: referenceElement?.clientWidth,
    height: referenceElement?.clientHeight,
  };

  let reference = referenceElement?.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

const HomeTechnologiesSection = () => {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef?.current));
  };
  console.log(mousePosition);
  return (
    <div className="px-5">
      <h1 className="item font-playfair text-5xl  text-jk-pink font-black">
        Technologies
      </h1>
      <div className="mb-20">
        <motion.div
          ref={boxRef}
          onMouseMove={(e) => handleMouseMove(e)}
          className="h-80 w-80 mx-auto py-10 bg-jk-black"
        ></motion.div>

        {/* <motion.div
          whileHover={{
            //scale: 1.1,
            rotateY: 20,
            rotateZ: 20,
            rotateX: 20,
            transition: { duration: 0.8 },
          }}
          className=" h-[100px] w-[100]px p-5 flex items-center justify-self-center cursor-default"
        >
          <Image
            src={`/technologies/docker.webp`}
            height={100}
            width={100}
            className="object-contain p-2 "
            alt="alt"
          />
        </motion.div>
        <motion.div
          whileHover={{
            //scale: 1.1,
            rotateY: -20,
            rotateZ: -20,
            rotateX: 45,
            transition: { duration: 0.8 },
          }}
          className=" h-[100px] w-[100]px p-5 flex items-center justify-self-center cursor-default"
        >
          <Image
            src={`/technologies/docker.webp`}
            height={100}
            width={100}
            className="object-contain p-2 "
            alt="alt"
          />
        </motion.div> */}
      </div>
      {/* <div className="flex flex-wrap gap-5 justify-center py-10 max-w-2xl mx-auto ">
        {IMAGES.map((image) => (
          <LeaningImage image={image} key={image.name} />
        ))}
      </div> */}
    </div>
  );
};

function LeaningImage({ image }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotateY: 20,
        rotateZ: 20,
        rotateX: 20,
        transition: { duration: 0.8 },
      }}
      className=" h-[100px] w-[100]px p-5 flex items-center justify-self-center cursor-default"
    >
      <Image
        src={`/technologies/${image.name}`}
        height={100}
        width={100}
        className="object-contain p-2 "
        alt={image.name.split(".")[0]}
      />
    </motion.div>
  );
}

export default HomeTechnologiesSection;
