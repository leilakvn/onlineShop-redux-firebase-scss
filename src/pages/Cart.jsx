import React from "react";
import { Helmet } from "./../components/Helmet";
import CommonSection from "./../components/CommonSection";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Container } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/CartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.cartItems);
  return (
    <Helmet title="cart">
      <CommonSection title="shopping cart" />
      <Container className="mt-5">
        <Row>
          <Col lg="9" className="cart__content">
            {cart.cartItems.length === 0 ? (
              <h2>There is no product in your cart</h2>
            ) : (
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.cartItems.map((item, index) => (
                    <Tr item={item} key={index}></Tr>
                  ))}
                </tbody>
              </table>
            )}
          </Col>
          <Col lg="3">
            <div>
              <h6 className="d-flex align-items-center justify-content-between">
                Subtotal
                <span className="fs-4 fw-bold">${cart.totalAmount}</span>
              </h6>
            </div>
            <p className="fs-6 mt-2">taxes and shipping all calculate in checkout</p>
            <div >
              <button className="buy_btn w-100">
                <Link to="/shop">Continue Shopping</Link>
              </button>
              <button className="buy_btn w-100 mt-2 mb-3 ">
                <Link to="/checkout">Checkout</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}$</td>
      <td>{item.quantity}</td>
      <td>
        <span>
          <motion.i
            onClick={() => dispatch(cartActions.deleteItem({ id: item.id }))}
            whileTap={{ scale: 1.2 }}
            className="ri-delete-bin-line"
          />
        </span>
      </td>
    </tr>
  );
};
export default Cart;
