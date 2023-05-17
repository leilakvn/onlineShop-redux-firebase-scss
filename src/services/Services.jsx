import React from "react";
import { Container, Row, Col } from "reactstrap";
import serviceData from "../assets/data/serviceData";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="services">
      <Container className="overflow-hidden">
        <Row className="service__row ">
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                style={{ background: `${item.bg}` }}
                className="service__item"
              >
                <span>
                  <i className={item.icon}></i>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
