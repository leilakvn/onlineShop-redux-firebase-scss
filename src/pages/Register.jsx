import React, { useState } from "react";
import { Helmet } from "./../components/Helmet";
import CommonSection from "./../components/CommonSection";
import { Row, Col, Container, Form, FormGroup } from "reactstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebasse.config";
import { toast } from "react-toastify";
import { db, storage } from "../firebasse.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const signup = async (e) => {
    e.preventDefault();
    // const auth = getAuth();
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const storageRef = ref(storage, `images/${Date.now() + username}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          (error) => {
            toast.error(error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                //update profile
                await updateProfile(user, {
                  displayName: username,
                  photoURL: downloadURL,
                });
                //store user data in firestore
                await setDoc(doc(db, "users", user.uid), {
                  uid: user.uid,
                  displayName: username,
                  email,
                  photoURL: downloadURL,
                });
              }
            );
          }
        );
        setLoading(false);
        toast.success("acount created");
        navigate("/login");
        console.log(user);
        // ...
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, ": ", errorMessage);
      });
  };

  return (
    <Helmet title="Register">
      <Container className="mt-5">
        <Row>
          {loading ? (
            <Col lg="12" className="text-center">Loading...</Col>
          ) : (
            <Col lg="6" className="m-auto text-center">
              <h3 className="mb-3">Signup</h3>
              <Form className="login__form" onSubmit={signup}>
                <FormGroup className="login__formgroup">
                  <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  ></input>
                </FormGroup>
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
                <FormGroup className="login__formgroup">
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  ></input>
                </FormGroup>
                <button type="submit" className="buy_btn">
                  Create an account
                </button>
                <p>
                  Already have an account?<Link to="/login">Login</Link>
                </p>
              </Form>
            </Col>
          )}
        </Row>
      </Container>
    </Helmet>
  );
};

export default Register;
