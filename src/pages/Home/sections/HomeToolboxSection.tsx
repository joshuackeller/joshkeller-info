import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import MakeArray from "../../../utilties/MakeArray";

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

      <div className="px-5 flex max-w-7xl mx-auto ">
        <div className="flex flex-wrap gap-10 justify-center mx-auto py-10 flex-1">
          {TOOLS.map((tool) => (
            <ToolItem
              tool={tool}
              key={tool.title}
              setActiveSection={setActiveSection}
            />
          ))}
        </div>
        <div className="flex-1">
          {activeSection.id != 0 ? (
            <div>
              <div className="flex justify-center">
                <LeaningImage image={activeSection.image} />
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <h2 className="text-jk-gold text-3xl font-bold ">
                &larr; select an item
              </h2>
            </div>
          )}
        </div>
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

function LeaningImage({ image }) {
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
      className="mx-auto  h-[100px] w-[100px] flex items-center"
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
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 2,
    image: "cloudflare.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 3,
    image: "deno.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 4,
    image: "docker.webp",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 5,
    image: "dynamo.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 6,
    image: "github.webp",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 7,
    image: "lambda.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 8,
    image: "mongodb.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 9,
    image: "mysql.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 10,
    image: "next.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 12,
    image: "postgres.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 13,
    image: "prisma.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 14,
    image: "python.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 15,
    image: "react.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 16,
    image: "rust.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 17,
    image: "tailwind.png",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 18,
    image: "tanstack.svg",
    title: "name will go here",
    text: "text will go here",
  },
  {
    id: 19,
    image: "typescript.png",
    title: "name will go here",
    text: "text will go here",
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
