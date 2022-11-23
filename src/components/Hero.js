import React from "react";
import Carousel from "react-bootstrap/Carousel";
import AnimatedTextWord from "./AnimatedTextWord";
import "../assets/css/heroStyles.css";

const Hero = () => {
  return (
    <section className="hero bg-pink p-2">
      <h2>
        <AnimatedTextWord
          text="Welcome Dolls"
          spanClass="text-light big"
          divClass="justify-content-center"
        />
      </h2>
    </section>
  );
};

export default Hero;
