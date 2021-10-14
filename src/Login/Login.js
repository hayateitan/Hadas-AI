import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import './login.css';
import Logo from '../assets/logoLogin.png'
import axios from 'axios';
import server from "../Config";


const Login = (props) => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(password)




    const doSubmit = () => {
        axios.post(`${server}/login`, { UserName: username, Password: password, })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    sessionStorage.setItem("jwt", res.data);
                    props.history.push("/Home");
                } else {

                    console.log('erreur')
                }
            });
    };

    return (
        <div id="backgroundLogin">

            <div id="fromLogin">

                <div id="containerLogin">

                    <img id="imglogin" src={Logo} />

                    <Form id="formlogin">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password" required placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="primary" type="submit" id="buttonlogin" onclick={doSubmit}>
                        Sign In
                        </Button>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default Login
