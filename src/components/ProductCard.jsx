import React from "react";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("product added successfully");
  };
  return (
    <Col lg="3"  sm="6" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img
            whileHover={{ scale: 1.1 }}
            width="300px"
            src={item.imgUrl}
            alt="prodduct"
          />
        </div>
        <div className="p-2 product__info ">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>

        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">{item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
