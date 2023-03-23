import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Fitness Tracker",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, itaque culpa. Aperiam, cupiditate placeat. Exercitationem quisquam natus dicta unde, aspernatur sunt dolor velit sint eveniet autem facere. Soluta, laboriosam ipsam?15",
    image: {},
  },
  {
    id: 2,
    title: "Juice Box",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, itaque culpa. Aperiam, cupiditate placeat. Exercitationem quisquam natus dicta unde, aspernatur sunt dolor velit sint eveniet autem facere. Soluta, laboriosam ipsam?15",
    image: {},
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
    title: "Place Holder",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, itaque culpa. Aperiam, cupiditate placeat. Exercitationem quisquam natus dicta unde, aspernatur sunt dolor velit sint eveniet autem facere. Soluta, laboriosam ipsam?15",
    image: {},
  },
];

const Item = ({ item, selectedId, setSelectedId }) => {
  const isSelected = selectedId === item.id;
  return (
    <motion.div
      className="card"
      layoutId={item.id}
      onClick={() => setSelectedId(isSelected ? null : item.id)}
      style={{
        position: "relative",
        zIndex: isSelected ? 2 : 1,
        transform: isSelected ? "scale(1)" : "none",
        transition: "transform 0.3s ease-in-out, z-index 0s 0.3s",
      }}
    >
      <motion.h1>{item.title}</motion.h1>
      <motion.p>{item.content}</motion.p>
    </motion.div>
  );
};

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <section>
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
            onClick={() => setSelectedId(null)}
            layoutId={selectedId}
            style={{
              position: "absolute",
              top: 300,
              left: 300,
              right: 300,
              bottom: 300,
              backgroundColor: "#(255, 255, 255, 0.000)",
              border: "white",
              zIndex: 3,
              padding: "20px",
            }}
            transition={{
              duration: 0.5,
              delayChildren: 0.5,
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
