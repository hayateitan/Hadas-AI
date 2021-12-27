import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./mydatabase.css";
import { SiPostgresql } from "react-icons/si";
import { MdOutlineEdit } from "react-icons/md";

const Mydatabase = () => {
  return (
    <div>
      <div id="optionT">
        <Badge bg="none" id="badgesetting">
          Tables
        </Badge>
      </div>
      <div id="optionS">
        <Badge bg="none" id="badgebudget">
          Schemas
        </Badge>
      </div>
      <div id="optionD">
        <Link to="/mydatabase">
          <Badge bg="none" id="badgeindex">
            Databases
          </Badge>
        </Link>
      </div>
      <div id="optionC">
        <Link to="/CreateDtabase">
          <Badge bg="none" id="badgeindex">
            Connect
          </Badge>
        </Link>
      </div>

      <div id="containerlist">
        <ListGroup variant="flush" id="containerlistvariantflush">
          <ListGroup.Item id="entetelistitem">
            {" "}
            <p id="pN">NAME</p> <p id="pM"> MODIFIED BY</p>{" "}
            <p id="pL"> LAST MODIFIED</p> <p id="pC1"> CREATED BY</p>{" "}
            <p id="pC2"> CREATED</p>{" "}
          </ListGroup.Item>
          <ListGroup.Item id="listitemaffiche">
            {" "}
            <SiPostgresql id="iconpostgresqlaffichedb" />
            <p id="pNt">Wish</p> <p id="pMB"> Shimon Malka</p>{" "}
            <p id="pLM"> 1 day ago</p> <p id="pC1B"> Shimon Malka</p>{" "}
            <p id="pC2C">1 week ago</p>{" "}
            <MdOutlineEdit id="iconpencileditaffichedb" />
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default Mydatabase;
