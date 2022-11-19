import React from "react";
import backgroundImage from "../assets/img/hero-bg.jpg";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import AnimatedTextWord from "./AnimatedTextWord";

const MotionButton = motion(Button);

const Hero = () => {
  return (
    <section
      className="text-center bg-image hero-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mask d-flex justify-content-center align-items-center h-100">
        <div className="hero-content">
          <h2 className="mb-5 text-white hero-heading">
            Home care services for the <br />{" "}
            <AnimatedTextWord
              divClass="justify-content-center"
              spanClass="text-light"
              text="ones that matter most"
            />
          </h2>
          <MotionButton
            whileHover={{
              scale: 1.2,
            }}
            variant="primary"
            className="me-4"
          >
            Find a Caregiver
          </MotionButton>
          {"  "}{" "}
          <MotionButton
            whileHover={{
              scale: 1.2,
            }}
            variant="outline-light"
          >
            Become a Caregiver
          </MotionButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
