import React from "react";
import AnimatedText from "./AnimatedText";
import { motion as m } from "framer-motion";
import clip from "./images/clip.mp4";

export const Home = () => {
  return (
    <m.div className="textContainer flex justify-center self-center content-center  w-[100%] items-center relative md:text-[20px] ">
      <div
        className="mainText  font-sans  flex flex-col z-10 font-semibold 
       sm:text-[40px] text-3xl lg:text-5xl absolute text-yellow-500 "
      >
        <AnimatedText text="I'm Cesar Bacaro web developer  musician. " />
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
