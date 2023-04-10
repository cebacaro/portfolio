import React, { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import { motion as m } from "framer-motion";
import clip from "./images/clip.mp4";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after some time (for demo purposes)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen lg:h-[87vh]">
          <div className="animate-spin rounded-full h-32 overflow-hidden w-32 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
      ) : (
        <m.div className="textContainer flex justify-center self-center content-center  w-[100%] items-center relative md:text-[20px] ">
          <div
            className="mainText  font-sans  flex flex-col z-10 font-semibold 
       text-2xl lg:text-5xl absolute text-yellow-500 justify-center ml-9"
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
      )}
    </>
  );
};
