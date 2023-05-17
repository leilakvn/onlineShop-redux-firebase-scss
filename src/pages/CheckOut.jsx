import React from "react";
import { Helmet } from "../components/Helmet";
import CommonSection from "../components/CommonSection";
import { Row, Col, Container, FormGroup, Form } from "reactstrap";
import { useSelector } from "react-redux";
import Cart from "./Cart";
const CheckOut = () => {
  const totalCost = useSelector((state) => state.cart.totalAmount);
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  return (
    <Helmet>
      <CommonSection title="Checkout" />
      <Container className="mt-5">
        <Row>
          <Col lg="8">
            <h6 className="mb-4 fw-bold">Billing information</h6>
            <Form>
              <FormGroup className="formGroup ">
                <input type="text" placeholder="Enter name"></input>
              </FormGroup>
              <FormGroup className="formGroup">
                <input type="text" placeholder="Enter email"></input>
              </FormGroup>
              <FormGroup className="formGroup">
                <input type="number" placeholder="Phone number"></input>
              </FormGroup>
              <FormGroup className="formGroup">
                <input type="text" placeholder="street"></input>
              </FormGroup>
              <FormGroup className="formGroup">
                <input type="text" placeholder="Postal code"></input>
              </FormGroup>
              <FormGroup className="formGroup">
                <input type="text" placeholder="city"></input>
              </FormGroup>
            </Form>
          </Col>
          <Col lg="4">
            <div className="checkout__card">
              <h6>
                Total Qty:<span>{totalQty}</span>
              </h6>
              <h6>
                Subtotal:<span>${totalCost}</span>
              </h6>
              <h6>
                Shipping:
                <br />
                Free shipping<span>$0</span>
              </h6>

              <h4>
                Total cost:<span>${totalCost}</span>
              </h4>
              <button className="buy_btn w-100">Place an order</button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default CheckOut;
