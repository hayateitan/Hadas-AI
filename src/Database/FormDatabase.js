import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./formdatabase.css";
import { IoIosInformationCircle } from "react-icons/io";
const FormDatabase = () => {
  return (
    <div id="containerformdatabase">
      <Form id="formimportdatabase">
        <Form.Group className="mb-3" controlId="Display Name">
          <Form.Label>Display Name</Form.Label>
          <Form.Control type="text" placeholder="Enter a display name" />
        </Form.Group>
        <Row>
          <Col xs={7}>
            <Form.Group controlId="Enter Host">
              <Form.Label>Host</Form.Label>
              <Form.Control type="text" placeholder="Enter Host" />
            </Form.Group>
          </Col>

          <Col xs={3}>
            <Form.Group controlId="Port">
              <Form.Label htmlFor="Port">Port</Form.Label>
              <Form.Control id="Port" type="number" placeholder="Port" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="Database name">
          <Form.Label>Database name</Form.Label>
          <Form.Control type="text" placeholder="Enter Database name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="Enter Password" />
        </Form.Group>
        <Button variant="primary" id="buttonconnect">
          Connect{" "}
        </Button>{" "}
      </Form>
      <div id="containertexthelp ">
        <h1 id="textprincipalhelp">
          <IoIosInformationCircle id="iconinformation" />
          Getting Connected
        </h1>
        <p id="premiertextp">Don't know your credentials</p>
        <p id="deuxiemetextp">Invite a team member</p>
        <p id="troisiemeemetextp">Firewall?</p>
        <p id="quatriemetextp">Allow connections from this IP address:</p>
        <p id="cinquiemetextp">-18.156.113.81/32</p>
        <p id="sixemetextp">Useful Links</p>
        <p id="septemetextp">-Documentation</p>
        <p id="huiptemetextp">-Security</p>
        <p id="neufemetextp">-Contact Support</p>
      </div>
    </div>
  );
};

export default FormDatabase;
