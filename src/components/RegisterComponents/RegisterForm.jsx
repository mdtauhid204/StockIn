import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

import { signUp } from "../../store/actions/authactions";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./RegisterForm.css";
import {
  Row,
  Col,
  Container,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

export const RegisterForm = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({ username: "", email: "", password: "" });

    // console.log(user);
  };

  if (auth._id) return <Navigate to="/" />;
  return (
    <>
      <Container style={{ minHeight: "100hv" }} className="login_form">
        <Row className="justify-content-md-center">
          <Col className="left_register_form" xs lg="4">
            <img
              className="svg_img"
              src="../../../Image/Authentication-pana.svg"
              alt=""
            />
          </Col>
          <Col md="auto"> </Col>

          <Col className="right_login_form" xs lg="5">
            <h2 className="register_heading">User Registeration </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Label>Username</Form.Label>
              <InputGroup className="mb-3">
                <Button variant="outline-secondary" id="button-addon1">
                  <i class="fa-solid fa-user-plus"></i>
                </Button>

                <FormControl
                  placeholder="AgriBusiness "
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  name="username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </InputGroup>
              <Form.Label>Email address</Form.Label>
              <InputGroup className="mb-3">
                <Button variant="outline-secondary" id="button-addon1">
                  <i class="fa-solid fa-envelope"></i>
                </Button>

                <FormControl
                  placeholder="email@gmail.com"
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </InputGroup>
              <Form.Label>Password</Form.Label>
              <InputGroup className="mb-3">
                <Button variant="outline-secondary" id="button-addon1">
                  <i class="fa-solid fa-lock"></i>
                </Button>

                <FormControl
                  placeholder="business@123"
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  name="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </InputGroup>
              <p>
                Have you already account ?{" "}
                <a style={{ paddingLeft: "5px" }} href="/login">
                  Log in
                </a>
              </p>
              <Button type="submit" variant="success">
                Register{" "}
              </Button>{" "}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
