import React from 'react'
import './style.css';
import { Link } from "react-router-dom";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { UilDesktop } from '@iconscout/react-unicons'
import { UilDatabase } from '@iconscout/react-unicons'
import { UilCloud } from '@iconscout/react-unicons'
import { UilFileUpload } from '@iconscout/react-unicons'
import { Icon } from '@iconify/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/logonavbar.png'
import { Navbar, Nav, FormControl, Button, Form, Container } from 'react-bootstrap';
import Notification from './Notification.js'
import Account from './Account.js'
import Fapem from './Fapem.js'
const NavAicon = () => {



    return (
        <div id="containerprincipalnotebook">

            <div id="containericon">
                <div id="navIcon">


                    <Link to="/Home"  >
                        <UilDesktop id="icon" />
                    </Link>
                    <br />
                    <Link to="/Notebook"  >
                        <FolderOpenIcon id="icon" />

                    </Link>
                    <br />
                    <Link to="/DataBase"  >
                        <UilDatabase id="icon" />
                    </Link>
                    <br />
                    <Link to="/NbIp"  >
                        <UilCloud id="icon" />
                    </Link>
                    <br />
                    <UilFileUpload id="icon" />

                    <br />
                    <Link to="/Slack"  >
                        <Icon icon="grommet-icons:slack" id="iconSlack" />
                    </Link>
                </div>
            </div>


            <div id="containerNavbar">
                <Navbar
                    collapseOnSelect
                    expand="lg"

                    fixed="top"
                    id="main-nav"
                >
                    <Container>
                        <Navbar.Brand href="home">

                            <img id="logoNavbar" src={Logo} />

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Form className="d-flex">
                                <FormControl id="searchnavbar" type="search" placeholder="Search" className="mr-2" aria-label="Search" />
                                <Button variant="outline-success" ><FontAwesomeIcon id="iconnavbar" icon={faSearch} /></Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>

                    <Nav.Item id="NIF">
                        <Fapem />
                    </Nav.Item>

                    <Nav.Item id="NIN">
                        <Notification />
                    </Nav.Item>
                    <Nav.Item id="NIA">
                        <Account />
                    </Nav.Item>
                </Navbar>
            </div>
        </div>
    )
}

export default NavAicon
