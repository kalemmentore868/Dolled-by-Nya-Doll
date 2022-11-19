import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import aboutImg from "../assets/img/about-img.jpg";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const About = () => {
  return (
    <section className="my-5" id="about">
      <Container fluid className="px-lg-5">
        <Row style={{ overflowX: "hidden" }}>
          <Col className="mb-5" md={6}>
            <MotionImage
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              src={aboutImg}
              alt="nurse at work"
              fluid
            />
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="about-content text"
            >
              <h2>Welcome to Benign Nursing Home</h2>
              <p className="about-text mt-3">
                We at Benign Nursing Home, through the recognition of
                individuality and respect of others, are committed to be a
                center of excellence which we provide for wellness of body, mind
                and spirit. This user friendly healthcare institution is
                equipped with many of the foremost specialists in the region and
                with courteous and efficient nurses and staff who are, at all
                times, ready to offer advice and assistance.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
