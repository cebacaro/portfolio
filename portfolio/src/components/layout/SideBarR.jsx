import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

export const SidebarR = () => {
  const location = useLocation();
  return (
    <div className="sidebarR">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: ".5",
          delay: "2",
        }}
        className="homeR"
      >
        {location.pathname !== "/about" ? (
          <motion.p whileHover={{ scale: 1.1 }}>
            <NavLink to="/about">About</NavLink>
          </motion.p>
        ) : (
          <motion.p whileHover={{ scale: 1.1 }}>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};
