import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Portfolio from "../components/Portfolio";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { HeaderNav } from "../components/Layout/HeaderNav";
import Sidebar from "../components/Layout/SideBar";
import { Footer1 } from "../components/Layout/Footer1";
import { SidebarR } from "../components/Layout/SideBarR";
import { AnimatePresence } from "framer-motion";

function MisRutas() {
  return (
    <BrowserRouter>
      {/*header*/}
      <div className="main-container">
        <HeaderNav />
        <div className="homeLayout">
          <Sidebar />

          {/*Main*/}
          <section className="content">
            <AnimatePresence initial={true}>
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
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
