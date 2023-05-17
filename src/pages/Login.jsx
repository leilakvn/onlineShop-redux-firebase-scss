import React, { useState } from "react";
import { Helmet } from "./../components/Helmet";
import { Row, Col, Container, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebasse.config";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success("Successfully logged in");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <Helmet title="Login">
      <Container className="mt-5">
        <Row>
          {loading ? (
            <Col lg="12" className="text-center fw-bold mb-5">
              Loading...
            </Col>
          ) : (
            <Col lg="6" className="m-auto text-center">
              <h3 className="mb-3">Login</h3>
              <Form className="login__form" onSubmit={signIn}>
                <FormGroup className="login__formgroup">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </FormGroup>
                <FormGroup className="login__formgroup">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </FormGroup>
                <button type="submit" className="buy_btn">
                  Login
                </button>
                <p>
                  Don't have an account?<Link to="/register">Sign Up</Link>
                </p>
              </Form>
            </Col>
          )}
        </Row>
      </Container>
    </Helmet>
  );
};

export default Login;
