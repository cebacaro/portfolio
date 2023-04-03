import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar z-10 self-center p-4">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: ".5",
          delay: "2",
        }}
        className="aboutRight bg-transparent"
      >
        {location.pathname !== "/" ? (
          <motion.p whileHover={{ scale: 1.1 }}>
            <NavLink
              to="/"
              className="text-yellow-100 uppercase tracking-[10px] border rounded-md  border-sky-500 p-2 font-bold text-[15] p15 hover:scale-100 duration-300 hover:text-teal-400"
            >
              Home
            </NavLink>
          </motion.p>
        ) : (
          <motion.p whileHover={{ scale: 1.1 }}>
            <NavLink
              to="/portfolio"
              className="text-yellow-100 uppercase tracking-[10px]  border border-sky-500 rounded-md p-2 font-bold text-[15px] hover:scale-100 duration-300 hover:text-teal-400"
            >
              Portfolio
            </NavLink>
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

export default Sidebar;
