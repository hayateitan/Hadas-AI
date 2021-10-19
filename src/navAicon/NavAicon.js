import React from 'react'
import './style.css';
import { Link } from "react-router-dom";
import { UilListUl } from '@iconscout/react-unicons'
import { UilDesktop } from '@iconscout/react-unicons'
import { UilBooks } from '@iconscout/react-unicons'
import { UilDatabase } from '@iconscout/react-unicons'
import { UilCloud } from '@iconscout/react-unicons'
import { UilFileUpload } from '@iconscout/react-unicons'
import { Icon } from '@iconify/react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../assets/logonavbar.png'
import { Navbar, Nav, FormControl, Button, Form, Container } from 'react-bootstrap';

const NavAicon = () => {



    return (
        <div id="containerprincipalnotebook">

            <div id="containericon">
                <div id="navIcon">

                    <UilListUl id="icon" />
                    <br />
                    <Link to="/Home"  >
                        <UilDesktop id="icon" />
                    </Link>
                    <br />
                    <Link to="/Notebook"  >
                        <UilBooks id="icon" />

                    </Link>
                    <br />
                    <UilDatabase id="icon" />
                    <br />
                    <UilCloud id="icon" />

                    <br />
                    <UilFileUpload id="icon" />

                    <br />
                    <Icon icon="grommet-icons:slack" id="iconSlack" />
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

                    <Nav.Item>
                        <Nav.Link href="/Account">
                            <FontAwesomeIcon icon={faPen} color="white" size='lg' />

                        </Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Account">
                            <FontAwesomeIcon icon={faBell} color="white" size='lg' />
                        </Nav.Link>

                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/Account">
                            <FontAwesomeIcon icon={faUser} color="white" size='lg' />
                        </Nav.Link>

                    </Nav.Item>

                    <Nav.Item>
                        {/* <Nav.Link>
                        {" "}
                        <FontAwesomeIcon
                            onClick={Logout}
                            icon={faPowerOff}
                            color="white"
                            size="1x"
                        />
                    </Nav.Link> */}
                    </Nav.Item>
                </Navbar>
            </div>
        </div>
    )
}

export default NavAicon
