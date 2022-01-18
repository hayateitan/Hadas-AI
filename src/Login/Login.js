import React, { useState } from "react";
import { FormControl, Button, Form } from "react-bootstrap";
import "./login.css";
import Logo from "../assets/logoLogin.png";
import axios from "axios";
import server, { nodejs } from "../Config";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const doSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${nodejs}/login`, { name: username, password: password })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          //sessionStorage.setItem("jwt", res.data);
          sessionStorage.setItem("clé", res.data);
          props.history.push("/Home");
        } else {
          console.log("erreur");
        }
      });
  };

  return (
    <div id="backgroundLogin">
      <div id="fromLogin">
        <div id="containerLogin">
          <img id="imglogin" src={Logo} />

          <Form id="formlogin" onSubmit={doSubmit}>
            <Form.Group className="mb-3">
              <Form.Label id="labellogin">Email </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label id="labellogin">Password</Form.Label>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" id />
            </Form.Group> */}
            <Button variant="primary" type="submit" id="buttonlogin">
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
