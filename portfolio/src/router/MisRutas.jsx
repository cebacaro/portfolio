import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
  return (
    <BrowserRouter>
      {/*header*/}
      <div className="main-container lg:h-[100vh]  flex w-full flex-col relative justify-center  bg-black">
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
              </Routes>
            </AnimatePresence>
          </section>

          <SidebarR />
        </div>

        <Footer1 />
      </div>
      {/*Footer*/}
    </BrowserRouter>
  );
}
export default MisRutas;
