import React from "react";
import { Helmet } from "./../components/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductList from "../components/ProductList";
import products from "../assets/data/products";
import { useState, useEffect } from "react";
import timerImage from "../assets/images/counter-timer-img.png";
import Clock from "../components/Clock";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSaleProducts, setBestSaleProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wireliessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    const filteredTrendingData = products.filter(
      (item) => item.category === "chair"
    );
    const filterdBestProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filterdMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingProducts(filteredTrendingData);
    setBestSaleProducts(filterdBestProducts);
    setMobileProducts(filterdMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  const year = new Date().getFullYear();

  return (
    <Helmet title="Home">
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending products in {year}</p>
                <h2>Make Your Interrior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid molestias eius beatae autem vitae velit cupiditate
                  fugiat. Voluptate, quasi voluptatem.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Products</h2>
            </Col>
            <ProductList data={bestSaleProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2 mt-5">Limmited Offers</h4>
                <h3 className="text-white fs-5 mb-3 ">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy_btn store_btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end timer__img">
              <img src={timerImage} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="newArrival__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">New Arrival Products</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wireliessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Popular Products</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
