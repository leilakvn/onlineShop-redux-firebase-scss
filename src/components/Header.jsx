import React from "react";
import { Container, Row } from "reactstrap";
import logo from "../assets/images/eco-logo.png";
import userIcon from "../assets/images/user-icon.png";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebasse.config";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const nav_link = [
    { path: "home", display: "Home" },
    { path: "cart", display: "Cart" },
    { path: "shop", display: "Shop" },
  ];

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const profileActionRef = useRef(null);
  const { currentUser } = useAuth();

  const toggleProfileAction = () =>
    profileActionRef.current.classList.toggle("show_profile_action");
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((err) => toast.error(err.message));
  };

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.className = "sticky__header";
      } else {
        headerRef.current.className = "";
      }
    });
  };
  const toggleMenu = () =>
    menuRef.current.classList.toggle(
      "activeMenu"
    ); /*if activeMenu is set remove it, otherwise add it*/
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });
  return (
    <header ref={headerRef}>
      <Container className="header">
        <Row>
          <div className="wrap_navbar">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Our Company</h1>
                {/* <p>since 1998</p> */}
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu">
                {nav_link.map((item, index) => (
                  <li className="menu__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "navActive" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icon">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={() => navigate("./cart")}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt="user"
                  onClick={toggleProfileAction}
                />
                <div
                  className="profile_action"
                  ref={profileActionRef}
                  onClick={toggleProfileAction}
                >
                  {currentUser ? (
                    <span onClick={handleSignOut}>Logout</span>
                  ) : (
                    <span className="d-flex justify-content-center align-items-center flex-column">
                      <Link to="/login">Login</Link>
                      <Link to="/register">Register</Link>
                    </span>
                  )}
                </div>
              </div>
              <div className="mobile_menu" onClick={toggleMenu}>
                <span>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
