import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { UilDesktop } from "@iconscout/react-unicons";
import { UilDatabase } from "@iconscout/react-unicons";
import { UilCloud } from "@iconscout/react-unicons";
import { Icon } from "@iconify/react";
import Logo from "../assets/logonavbar.svg";
import { Navbar, Nav, Container } from "react-bootstrap";
import Notification from "./Notification.js";
import Account from "./Account.js";
import SearchBar from "./SearchBar";
const NavAicon = () => {
  return (
    <div id="containerprincipalnotebook">
      <div id="containerNavbar">
        <Navbar collapseOnSelect expand="lg" fixed="top" id="main-nav">
          <Container>
            <Navbar.Brand href="home">
              <img id="logoNavbar" src={Logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          </Container>
          <Nav.Item id="NIH">
            {" "}
            <Link to="/Home">
              <UilDesktop id="icon" />
              <p>HOME</p>
            </Link>
            <p id="line1">|</p>
          </Nav.Item>

          <Nav.Item id="NINB">
            {" "}
            <Link to="/Notebook">
              <FolderOpenIcon id="icon" />
              <p>NOTEBOOKS</p>
            </Link>
            <p id="line2">|</p>
          </Nav.Item>
          <Nav.Item id="NID">
            {" "}
            <Link to="/DataBase">
              <UilDatabase id="icon" />
              <p>DATABASES</p>
            </Link>
            <p id="line3">|</p>
          </Nav.Item>
          <Nav.Item id="NIC">
            {" "}
            <Link to="/NbIp">
              <UilCloud id="icon" />
              <p>CLOUD</p>
            </Link>
            <p id="line4">|</p>
          </Nav.Item>

          <Nav.Item id="NISL">
            {" "}
            <Link to="/Slack">
              <Icon icon="grommet-icons:slack" id="iconSlack" />
            </Link>
          </Nav.Item>

          <Nav.Item id="NIN">
            <Notification />
          </Nav.Item>
          <Nav.Item id="NIA">
            <Account />
          </Nav.Item>
          <Nav.Item id="NIS">
            <SearchBar />
          </Nav.Item>
        </Navbar>
      </div>
    </div>
  );
};

export default NavAicon;
