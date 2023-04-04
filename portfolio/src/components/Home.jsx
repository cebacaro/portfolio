import React from "react";

import { motion as m } from "framer-motion";
import clip from "./images/clip.mp4";

export const Home = () => {
  // const [text] = useTypewriter({
  //   words: ["Que Bola!!!", "Check out my work"],
  //   delaySpeed: 1000,
  // });
  return (
    <m.div
      // change initial to 200%
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.8, easy: "easyOut" }}
      className="textContainer flex justify-center self-center content-center h-[90vh] w-[100%] items-center relative "
    >
      <div className="mainText text-yellow-100 absolute z-10 font-bold text-center ">
        <m.h1
          style={{ display: "inline-block" }}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Cesar Bacaro <br />
          web developer <br />
          musician
        </m.h1>
      </div>
      <div className="overlay absolute  h-[80vh] w-[100%]  bg-black bg-opacity-40 " />
      <video
        className=" flex  justify-center w-full"
        src={clip}
        autoPlay
        loop
        muted
      />
    </m.div>
  );
};
