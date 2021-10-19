import React from 'react'
import { Card, Modal } from 'react-bootstrap'
import ABtesting from '../assets/abTesting.png'
import './style.css'
import Finances from '../assets/finance.png'
import Tech from '../assets/technologie.jpeg'
import Industrie from '../assets/industrie.jpeg'
const ChoiceBuisnessDomain = () => {






    return (


        <Modal.Dialog size="lg" scrollable={true} aria-labelledby="example-modal-sizes-title-lg"  >
            <Modal.Body id="container">
                <div id="repository">

                    <button type="button" id="buisnessDomainF">
                        <div>
                            <Card.Img src={Finances} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    Finance
                                </p>
                            </div>
                        </div>
                    </button>

                </div>

                <div id="repository">

                    <button type="button" id="buisnessDomainT">
                        <div>
                            <Card.Img src={Tech} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    Tech
                                </p>
                            </div>
                        </div>
                    </button>

                </div>
                <div id="repository">

                    <button type="button" id="buisnessDomainI">
                        <div>
                            <Card.Img src={Industrie} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    Industrie
                                </p>
                            </div>
                        </div>
                    </button>

                </div>
                <div id="repository">

                    <button type="button" id="buisnessDomainAB">
                        <div>
                            <Card.Img src={ABtesting} alt="Card image" id="abtestingimages" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    AB Testing
                                </p>
                            </div>
                        </div>
                    </button>

                </div>
            </Modal.Body>
        </Modal.Dialog>
    )
}

export default ChoiceBuisnessDomain
