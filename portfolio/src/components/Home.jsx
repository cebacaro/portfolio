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
      className="textContainer flex justify-center self-center content-center  w-[100%] items-center relative md:text-[20px]"
    >
      <div
        className="mainText text-[#a7ebd4] font-sans absolute z-10 font-semibold 
      //  text-center sm:text-[40px] text-3xl lg:text-7xl"
      >
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
      <div className="overlay absolute  md:h-[85vh] w-[100%]  bg-black bg-opacity-50  " />
      <video
        className=" flex  justify-center h-[85vh] w-full"
        src={clip}
        loop
        autoPlay
        muted
      />
    </m.div>
  );
};
