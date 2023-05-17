import React, { useState } from "react";
import CommonSection from "../components/CommonSection";
import { Helmet } from "../components/Helmet";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import ProductList from "../components/ProductList";
const Shop = () => {
  const [productData, setProductData] = useState(products);
  const handelFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductData(filteredProducts);
    }
    if (filterValue === "wireless") {
      const filteredProducts = productData.filter(
        (item) => item.category === "wireless"
      );
      setProductData(filteredProducts);
    }
    console.log(productData);
  };
  const handelSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedproducts = products.filter((item) =>
      item.productName.toLocaleLowerCase().includes(searchTerm)
    ); 
   setProductData(searchedproducts) 
  };
  return (
    <Helmet title="shop">
      <CommonSection title="shop" />
      <Container style={{ padding: "50px 0px" }}>
        <Row>
          <Col lg="3" sm="6" xs="12">
            <div className="filter__widget">
              <select onChange={handelFilter}>
                <option>Filter By Category</option>
                <option value="mobile">mobile</option>
                <option value="sofa"> sofa</option>
                <option value="chair">chair</option>
                <option value="watch">watch</option>
                <option value="wireless">wireless</option>
              </select>
            </div>
          </Col>
          <Col lg="3" sm="6" className="text-end" xs="12">
            <div className="filter__widget">
              <select>
                <option>Sort By</option>
                <option value="ascendenig">ascendenig</option>
                <option value="descending"> descending</option>
              </select>
            </div>
          </Col>
          <Col lg="6" sm="12">
            <div className="search__box">
              <input
                onChange={handelSearch}
                placeholder="search..."
                type="text"
              />
              <span>
                <i className="ri-search-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="pt-5">
          {productData.length === 0 ? (
            <h1 className="text-center fs-4">No products are found!</h1>
          ) : (
            <ProductList data={productData} />
          )}
        </Row>
      </Container>
    </Helmet>
  );
};

export default Shop;
