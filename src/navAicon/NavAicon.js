import React from 'react'
import './style.css';
import { Link } from "react-router-dom";
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCoins } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
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

                    <FontAwesomeIcon id="icon" icon={faList} />
                    <br />
                    <Link to="/Home"  >
                        <FontAwesomeIcon id="icon" icon={faHome} />
                    </Link>
                    <br />
                    <Link to="/Notebook"  >
                        <FontAwesomeIcon id="icon" icon={faPlus} />
                    </Link>
                    <br />
                    <FontAwesomeIcon id="icon" icon={faCoins} />
                    <br />
                    <FontAwesomeIcon id="icon" icon={faCloud} />
                    <br />
                    <FontAwesomeIcon id="icon" icon={faFileUpload} />
                    <br />
                    <FontAwesomeIcon id="icon" icon={faUserFriends} />
                    <br />
                    <FontAwesomeIcon id="icon" icon={faComments} />
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
