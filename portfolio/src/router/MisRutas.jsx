import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Portfolio from "../components/Portfolio";
import { Home } from "../components/Home";
import Contact from "../components/Contact";
import { About } from "../components/About";
import Resume from "../components/Resume";
import { HeaderNav } from "../components/Layout/HeaderNav";
import Sidebar from "../components/Layout/SideBar";
import Footer1 from "../components/Layout/Footer1";
import { SidebarR } from "../components/Layout/SideBarR";
import { AnimatePresence } from "framer-motion";
import "../App.css";

function MisRutas() {
  const Navigate = useNavigate();
  return (
    <div>
      {/*header*/}
      <div className="main-container h-full lg:h-[100vh]  flex w-full flex-col relative justify-center  bg-black">
        <HeaderNav />

        <div className="homeLayout flex ">
          <Sidebar />

          {/*Main*/}
          <section
            className="content h-[87vh] lg:h-[80vh] flex w-full 
          justify-center "
          >
            <AnimatePresence initial={true}>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactMe" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<Navigate to="/" replace={true} />} />
              </Routes>
            </AnimatePresence>
          </section>

          <SidebarR />
        </div>

        <Footer1 />
      </div>
      {/*Footer*/}
    </div>
  );
}
export default MisRutas;
