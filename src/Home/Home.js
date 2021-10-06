import React from 'react'
import { useHistory } from "react-router-dom";
import './style.css'


const Home = () => {


    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }

    const buttonn = () => {
        console.log('sdhdggd')
    }


    return (
        <div id="principalContainerHome">

            <div id="homeimg1">
                <div id="img1home" />
                <div id="pHome1" >
                    <p id="P1">Tutorial: Haroé basics</p>
                </div>
                <div id="ppHome1" >
                    <p id="Pp1">Learn how to make the most out of your data using Haroé.</p>
                </div>
                <div id="Dbuttonp1">
                    <button onClick={buttonn} type="button" id="button1">
                        Get Started
                    </button>
                </div>
            </div>

            <div id="homeimg2">
                <div id="img2home" />
                <div id="pHome2"  >
                    <p id="P2">Shortcut #1</p>
                </div>
                <div id="ppHome2" >
                    <p id="Pp2">E.g., compute hours budget.</p>
                </div>
                <div id="Dbuttonp2">
                    <button onClick={buttonn} type="button" id="button2">
                        Access
                    </button>
                </div>
            </div>

            <div id="homeimg3">
                <div id="img3home" />
                <div id="pHome3" >
                    <p id="P3">Team status</p>
                </div>
                <div id="ppHome3" >
                    <p id="Pp3">Get the latest updates on your team's work and collaborations to your projects.</p>
                </div>
                <div id="Dbuttonp3">
                    <button onClick={buttonn} type="button" id="button3">
                        Access
                    </button>
                </div>
            </div>

            <div id="homeimg4">
                <div id="img4home" />
                <div id="pHome4"  >
                    <p id="P4">Hands-on: sales data</p>
                </div>
                <div id="ppHome4" >
                    <p id="Pp4">Learn how to make the most out of your data using Haroé.</p>
                </div>
                <div id="Dbuttonp4">
                    <button onClick={buttonn} type="button" id="button4">
                        Get Started
                    </button>
                </div>
            </div>

            <div id="homeimg5">
                <div id="img5home" />
                <div id="pHome5"  >
                    <p id="P5">Shortcut #2</p>
                </div>
                <div id="ppHome5" >
                    <p id="Pp5">E.g., a particular notebook.</p>
                </div>
                <div id="Dbuttonp5">
                    <button onClick={buttonn} type="button" id="button5">
                        Access
                    </button>
                </div>
            </div>

            <div id="homeimg6">
                <div id="img6home" />
                <div id="pHome6"  >
                    <p id="P6">Shortcut #3</p>
                </div>
                <div id="ppHome6" >
                    <p id="Pp6">E.g., a link to a tutorial on the causal features of Haroé.</p>
                </div>
                <div id="Dbuttonp6">
                    <button onClick={buttonn} type="button" id="button6">
                        Get Started
                    </button>
                </div>
            </div>

            <div id="homeimg7">
                <div id="img7home" />

                <div id="pHome7"  >
                    <p id="P7">Hands-on: pricing policy</p>
                </div>
                <div id="ppHome7" >
                    <p id="Pp7">Learn how to create an AI-based pricing policy using Haroé.</p>
                </div>
                <div id="Dbuttonp7">
                    <button onClick={buttonn} type="button" id="button7">
                        Get Started
                    </button>
                </div>
            </div>

        </div>

    )
}

export default Home
