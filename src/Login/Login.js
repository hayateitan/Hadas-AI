import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
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
                    <InputGroup className="mb-3">
                        <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='Username' required onChange={(e) => setUsername(e.target.value)} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password" required placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    </InputGroup>
                    <Link to="/Forgot"  >
                        <p id="textforgotlogin">  Forgot?</p>

                    </Link>
                    <Button id="buttonlogin" onClick={doSubmit}> Send</Button>
                    {/* <div ><p style='color:red' id="passwordfalse">Utilisateur ou mot de passe incorrect</p></div> */}
                </div>
            </div>
        </div>
    )
}

export default Login
