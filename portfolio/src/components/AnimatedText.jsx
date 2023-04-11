import React from "react";
import { motion as m } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function AnimatedText({ text, className = "" }) {
  return (
    <div className="lg:w-[35vw] lg:ml-40 ml-50 flex items-center justify-center text-left  overflow-hidden ">
      <m.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`inline-block w-full text-teal-400 font-bold font-serif capitalize lg:text-6xl ${className}`}
      >
        {text.split(" ").map((word, idx) => (
          <m.span
            key={word + "-" + idx}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;{" "}
          </m.span>
        ))}
      </m.h1>
    </div>
  );
}

export default AnimatedText;
