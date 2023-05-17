import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <div>
                <h1 className="text-white">Our Company</h1>
                {/* <p>since 1998</p> */}
              </div>
            </div>
            <p className="mt-4 footer__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              consequuntur dolore natus totam, adipisci alias quae quaerat
              provident soluta assumenda!
            </p>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chairs</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            {" "}
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Usefull Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            {" "}
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>123 Esfahan,Iran</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+989133050244</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>leila.kvn.isf@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" className=" copyRight text-center">
            Copyright {year}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
