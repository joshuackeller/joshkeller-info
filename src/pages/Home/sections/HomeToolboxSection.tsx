import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import MakeArray from "../../../utilties/MakeArray";
import clsx from "clsx";
import {
  Cog6ToothIcon,
  Cog8ToothIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { CogIcon as SolidCogIcon } from "@heroicons/react/24/solid";

const HomeToolboxSection = () => {
  const [moveMarquee, setMoveMarquee] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState({
    id: 0,
    image: "",
    title: "",
    text: "",
  });

  return (
    <div>
      <div
        onMouseOver={() => setMoveMarquee(true)}
        onMouseLeave={() => setMoveMarquee(false)}
        className="w-min mx-auto"
      >
        <Marquee
          play={moveMarquee}
          className="font-playfair text-5xl font-black py-5  hover:bg-jk-pink hover:text-white text-jk-pink bg-jk-offwhite max-w-sm mx-auto transition duration-300"
          gradient={false}
        >
          {MakeArray(10).map((item) => (
            <div className="mx-5" key={item}>
              toolbox{" "}
            </div>
          ))}
        </Marquee>
      </div>

      <div className="px-5 flex flex-col md:flex-row max-w-7xl mx-auto ">
        <div className="flex flex-wrap gap-12 justify-center mx-auto py-10 flex-1">
          {TOOLS.map((tool) => (
            <ToolItem
              tool={tool}
              key={tool.title}
              setActiveSection={setActiveSection}
            />
          ))}
        </div>
        <div className="flex-1 relative overflow-hidden m-12 ">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <Cog6ToothIcon className="h-[1000px] w-[1000px] text-jk-gold animate-spin-slow " />
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
            <Cog8ToothIcon className="h-[1000px] w-[1000px] text-jk-pink animate-spin-slow " />
          </div>
        </div>
        {/* <div className="flex-1">
          {activeSection.id != 0 ? (
            <div className="flex  items-center justify-center h-full">
              <div>
                <LeaningImage image={activeSection.image} />
                <div className="text-3xl">{activeSection.title}</div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <h2 className="text-jk-gold text-3xl font-bold ">
                &larr; select an item
              </h2>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

const ToolItem = ({ tool, setActiveSection }) => {
  return (
    <div onClick={() => setActiveSection(tool)} className="cursor-pointer">
      <LeaningImage image={tool.image} />
    </div>
  );
};

function LeaningImage({ image, size = "sm" }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    distanceX: 0,
    distanceY: 0,
  });
  const boxRef = useRef();
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef?.current));
  };
  return (
    <motion.div
      ref={boxRef}
      onMouseMove={(e) => handleMouseMove(e)}
      whileHover={{
        rotateX: mousePosition.distanceX / 1.5,
        rotateY: mousePosition.distanceY / 1.5,
        //rotateZ: (mousePosition.distanceX + mousePosition.distanceY) / 2,
      }}
      className={clsx(
        "mx-auto  flex items-center",
        size == "sm" ? "h-[100px] w-[100px]" : "h-[200px] w-[200px]"
      )}
    >
      <Image
        src={`/toolbox/${image}`}
        height={100}
        width={100}
        className="object-contain "
        alt="aws"
      />
    </motion.div>
  );
}

export default HomeToolboxSection;

const TOOLS = [
  {
    id: 1,
    image: "aws.png",
    title: "aws",
  },
  {
    id: 2,
    image: "cloudflare.png",
    title: "Cloudflare",
  },
  {
    id: 3,
    image: "deno.png",
    title: "Deno",
  },
  {
    id: 4,
    image: "docker.webp",
    title: "Docker",
  },
  {
    id: 5,
    image: "dynamo.png",
    title: "DynamoDB",
  },
  {
    id: 6,
    image: "github.webp",
    title: "Github",
  },
  {
    id: 7,
    image: "lambda.png",
    title: "Lambda",
  },
  {
    id: 8,
    image: "mongodb.png",
    title: "MongoDB",
  },
  {
    id: 9,
    image: "mysql.png",
    title: "MySql",
  },
  {
    id: 10,
    image: "next.png",
    title: "Next JS",
  },
  {
    id: 12,
    image: "postgres.png",
    title: "Postgres",
  },
  {
    id: 13,
    image: "prisma.png",
    title: "Prisma",
  },
  {
    id: 14,
    image: "python.png",
    title: "Python",
  },
  {
    id: 15,
    image: "react.png",
    title: "React",
  },
  {
    id: 16,
    image: "rust.png",
    title: "Rust",
  },
  {
    id: 17,
    image: "tailwind.png",
    title: "Tailwind CSS",
  },
  {
    id: 18,
    image: "tanstack.svg",
    title: "TanStack",
  },
  {
    id: 19,
    image: "typescript.png",
    title: "TypeScript",
  },
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

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    distanceX: position.x - (offset?.left + offset?.width / 2),
    distanceY: position.y - (offset?.top + offset?.height / 2),
  };
}
