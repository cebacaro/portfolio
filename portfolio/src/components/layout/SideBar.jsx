import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: ".5",
          delay: "2",
        }}
        className="aboutRight"
      >
        {location.pathname !== "/" ? (
          <motion.p whileHover={{ scale: 1.1 }}>
            <NavLink to="/">Home</NavLink>
          </motion.p>
        ) : (
          <motion.p whileHover={{ scale: 1.1 }}>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

export default Sidebar;
