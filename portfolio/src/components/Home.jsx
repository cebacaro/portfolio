import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion as m } from "framer-motion";

export const Home = () => {
  const [text] = useTypewriter({
    words: [
      "6 seconds is not enough",
      "To check my work",

      "Is where I let my imagination fly!!",
    ],
    delaySpeed: 1000,
  });
  return (
    <m.div
      // change initial to 200%
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.8, easy: "easyOut" }}
      className="textContainer"
    >
      <div className="mainText">
        <h1>
          <span>{text}</span>
          <Cursor cursorColor=" white" />
        </h1>

        <p>
          "Hold yourself responsible for a higher standard than anybody else
          expects of you. <br />
          Never excuse yourself. Never pity yourself. Be a hard master to
          yourself-and be lenient to everybody else.” <br />
          <strong> "Henry Ward Beecher"</strong>
        </p>
      </div>
    </m.div>
  );
};
