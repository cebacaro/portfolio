import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Fitness Tracker",
    content:
      "Fullstack application constructing a tracker for exercise and routines with a co-developer within two weeks.",
    image: {},
    url: "https://ap-cb-fitness-trackr.netlify.app",
    url1: "https://github.com/cebacaro/FitnessTrackr",
    url2: "https://github.com/cebacaro/FitnessTrac-FrontEnd",
  },
  {
    id: 2,
    title: "Juice Box",
    content:
      "Fullstack application constructing a Simple Tumblr clone functionality with a co-developer within two weeks",
    image: {},
    url: "https://juicebox-social.netlify.app",
    url1: "https://github.com/cebacaro/juicebox",
    url2: "https://github.com/pelnik/juicebox",
  },
  {
    id: 3,
    title: "e-commerce",
    content: "Coming soon",
  },
  {
    id: 4,
    title: "My Resume",

    content1: "Click To see my resume ",
  },
];

const Item = ({ item, selectedId, setSelectedId }) => {
  const isSelected = selectedId === item.id;
  return (
    <motion.div
      className="card border-sky-500 border  rounded-md w-[200px] h-[80px]"
      layoutId={item.id}
      onClick={() => setSelectedId(isSelected ? null : item.id)}
      style={{
        position: "relative",
        zIndex: isSelected ? 2 : 1,
        transform: isSelected ? "scale(1)" : "none",
        opacity: 1,
        transition: "transform 0.01s  z-index 0s 0s",
      }}
    >
      <motion.h1 className=" flex justify-center pt-[30px] text-yellow-100 ">
        {item.title}
      </motion.h1>
      <motion.p className="text-center hidden">{item.content}</motion.p>
      <motion.p className="text-center hidden">{item.content1}</motion.p>
      <motion.a className="text-center hidden">{item.url}</motion.a>
      <motion.a className="text-center hidden">{item.url1}</motion.a>
      <motion.a className="text-center hidden">{item.url2}</motion.a>
    </motion.div>
  );
};

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="portfolio w-full relative  rounded-lg text-center items-center flex flex-col justify-evenly ">
      <h3 className="text-gray-400 justify-center top-5 lg:text-[40px] tracking-[12px] absolute uppercase">
        Portfolio
      </h3>

      <section className="text-white  grid lg:grid-cols-2 gap-5">
        {cards.map((item) => (
          <Item
            key={item.id}
            item={item}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
        <AnimatePresence className=" ">
          {selectedId && (
            <motion.div
              className="popUp lg:w-[50vw] w-[70vw]  justify-center p-4 h-[60vh] text-gray-300  top-[80px] flex-col text-center bg-gray-500 rounded-xl flex lg:absolute absolute lg:mr-[0px] border border-x-white "
              onClick={() => setSelectedId(null)}
              layoutId={selectedId}
              style={{
                bottom: 200,
                zIndex: 3,
                justifySelf: "center",
              }}
              transition={{
                duration: 0.6,
                delayChildren: 1,
                staggerDirection: -1,
                easy: "easyOut",
              }}
              exit={{ opacity: 0, easy: "easy-out" }}
            >
              <motion.h1 className="self-center text-4xl pb-10 top-1 text-yellow-400 ">
                {cards.find((item) => item.id === selectedId).title}
              </motion.h1>
              <motion.h5 className="self-center lg:text-2xl top-1 pb-8 ">
                {cards.find((item) => item.id === selectedId).content}
              </motion.h5>
              <NavLink to="/resume">
                {cards.find((item) => item.id === selectedId).content1}
              </NavLink>
              <motion.a
                className="self-center lg:text-2xl top-1 "
                href={cards.find((item) => item.id === selectedId).url}
                target="_blank"
              >
                {cards.find((item) => item.id === selectedId).url}
              </motion.a>
              <motion.a
                className="self-center lg:text-2xl top-1 p-x-3 m-x-4 "
                href={cards.find((item) => item.id === selectedId).url1}
                target="_blank"
              >
                {cards.find((item) => item.id === selectedId).url1}
              </motion.a>
              <motion.a
                className="self-center lg:text-2xl top-1 z-20"
                href={cards.find((item) => item.id === selectedId).url2}
                target="_blank"
              >
                {cards.find((item) => item.id === selectedId).url2}
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Portfolio;
