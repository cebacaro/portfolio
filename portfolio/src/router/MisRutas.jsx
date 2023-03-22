import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import Portfolio from "../components/Portfolio";

import { About } from "../components/About";

export const MisRutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
