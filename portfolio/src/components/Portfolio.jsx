import React from "react";
import { motion as m } from "framer-motion";

import Carousel from "react-bootstrap/Carousel";

function Portfolio() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.8, easy: "easyOut" }}
      className="carousel"
    >
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/-10327881921485465420.0 (1).jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/-10327881921485465420.0 (1).jpg")}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/-10327881921485465420.0 (1).jpg")}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </m.div>
  );
}

export default Portfolio;
