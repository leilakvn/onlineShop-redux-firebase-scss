import { Route, Routes, Navigate } from "react-router-dom";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import { ProtectedRoute } from "./ProtectedRoute";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/shop/:id" element={<ProductDetails />}></Route>
    </Routes>
  );
};

export default Routers;
