import React from "react";
import { motion as m } from "framer-motion";

export const About = () => {
  return (
    <div className="portfolio   h-[50vh] relative  rounded-lg text-center  flex flex-col ">
      <h3 className="text-gray-400 justify-center  top-5 lg:text-[40px] tracking-[12px] uppercase">
        about
      </h3>
      <m.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.8, easy: "easyOut" }}
        className="textContainerA flex flex-col  lg:content-center lg:flex-1 lg:justify-center lg:items-center"
      >
        <div className="AboutContent lg:h-[40vh] border h-[70vh] rounded-lg mt-10 bg-[#ffffff2d] lg:mt-30 text-xs text-white lg:flex p-4 lg:w-[700px]">
          <img
            className="img float-right rounded-md h-[100px] w-[70px] p-1 lg:float-right md:h-[200px] lg:h-[210px] lg:w-[200px]"
            src={require("./images/-10327881921485465420.0 (1).jpg")}
            alt="foto"
          />
          <p className=" leading-[15px] text-justify text-gray-400 text-[16px] lg:pl-3 lg:leading-[15px] lg:text-[15px]">
            My name is Cesar Bacaro, born and raised in Cuba. I graduated as a
            Professor and percussion instrumentalist in 2003. After moving to
            the Capital (Havana) and performing with the top bands in the
            country, I moved to Italy and lived there for 7 years where I played
            in several festivals around Europe. I'm based now in New Orleans. I
            started teaching myself a bit of coding in 2021 and immediately fell
            in love with it. I'm fascinated by the different programs and the
            process of creating something new that can be shared with others. I
            pursued a Boot camp education so I could learn it full-time and in a
            structured setting. I am changing careers to Tech as I want to find
            a job that's an intersection of my two interests (programming and
            music). I am a very social and family oriented. I enjoy working with
            others and can be both a leader and a team player.
          </p>
        </div>
      </m.div>
    </div>
  );
};
