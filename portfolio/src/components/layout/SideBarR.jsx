import React from "react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

export const SidebarR = () => {
  const location = useLocation();
  return (
    <div className="sidebarR z-10 self-center p-4 ">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: ".5",
          delay: "1",
        }}
        className="homeR"
      >
        {location.pathname !== "/about" ? (
          <motion.p whileHover={{ scale: 1.1 }}>
            <NavLink
              to="/about"
              className="text-yellow-100 uppercase tracking-[10px]  border border-sky-500 rounded-md p-2 font-bold text-[10px] md:text-[10px] lg:text-[15px] hover:scale-100 duration-300 hover:text-teal-400"
            >
              About
            </NavLink>
          </motion.p>
        ) : (
          <motion.p whileHover={{ scale: 1.1 }}>
            <NavLink
              to="/portfolio"
              className="text-yellow-100 uppercase tracking-[10px]  content-center border border-sky-500
          rounded-md p-2 font-bold text-[10px] md:text-[10px] lg:text-[15px] hover:scale-100 duration-300 hover:text-teal-400
              "
            >
              Portfolio
            </NavLink>
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};
