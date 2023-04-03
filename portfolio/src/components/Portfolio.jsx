import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clip from "./images/clip.mp4";

const cards = [
  {
    id: 1,
    title: "Fitness Tracker",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, itaque culpa. Aperiam, cupiditate placeat. Exercitationem quisquam natus dicta unde, aspernatur sunt dolor velit sint eveniet autem facere. Soluta, laboriosam ipsam?15",
    image: {},
    url: "https://ap-cb-fitness-trackr.netlify.app",
  },
  {
    id: 2,
    title: "Juice Box",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, itaque culpa. Aperiam, cupiditate placeat. Exercitationem quisquam natus dicta unde, aspernatur sunt dolor velit sint eveniet autem facere. Soluta, laboriosam ipsam?15",
    image: {},
    url: "https://juicebox-social.netlify.app",
  },
  {
    id: 3,
    title: "Puppy Bowl",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, itaque culpa. Aperiam, cupiditate placeat. Exercitationem quisquam natus dicta unde, aspernatur sunt dolor velit sint eveniet autem facere. Soluta, laboriosam ipsam?15",
    image: {},
  },
  {
    id: 4,
    title: "My Resume",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, itaque culpa. Aperiam, cupiditate placeat. Exercitationem quisquam natus dicta unde, aspernatur sunt dolor velit sint eveniet autem facere. Soluta, laboriosam ipsam?15",
    video: clip,
  },
];

const Item = ({ item, selectedId, setSelectedId }) => {
  const isSelected = selectedId === item.id;
  return (
    <motion.div
      className="card border-sky-500 border rounded-md w-[200px] h-[80px]"
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
      <motion.a className="text-center hidden">{item.url}</motion.a>
    </motion.div>
  );
};

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="portfolio    h-[97vh] relative  rounded-lg text-center items-center flex flex-col justify-evenly ">
      <h3 className="text-gray-400 justify-center top-5 text-[40px] tracking-[12px] absolute uppercase">
        Portfolio
      </h3>

      <section className="text-white  grid grid-cols-2 gap-5">
        {cards.map((item) => (
          <Item
            key={item.id}
            item={item}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ))}
        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="popUp w-96 bg-slate-300 absolute justify-center"
              onClick={() => setSelectedId(null)}
              layoutId={selectedId}
              style={{
                top: 200,
                left: 300,
                right: 300,
                bottom: 200,
                backgroundImage: "clip",
                border: "black",
                zIndex: 3,
                color: "white",
                padding: "20px",
              }}
              transition={{
                duration: 0.6,
                delayChildren: 1,
                staggerDirection: -1,
                easy: "easyOut",
              }}
              exit={{ opacity: 0, easy: "easy-out" }}
            >
              <motion.h1>
                {cards.find((item) => item.id === selectedId).title}
              </motion.h1>
              <motion.h5>
                {cards.find((item) => item.id === selectedId).content}
              </motion.h5>
              <motion.a
                href="https://ap-cb-fitness-trackr.netlify.app"
                target={"_blank"}
              >
                {cards.find((item) => item.id === selectedId).url}
              </motion.a>
              <motion.h5>
                {cards.find((item) => item.id === selectedId).video}
              </motion.h5>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Portfolio;
