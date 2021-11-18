import React from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import Banking from '../assets/banking.png'
import Publicsector from '../assets/government.png'
import './buisnesdomain.css'
import Finances from '../assets/finance.png'
import Fashion from '../assets/fashion.png'
import Healthcare from '../assets/healthcare.png'
import Insurance from '../assets/insurance.png'
import Manufacturing from '../assets/manufacturing.png'
import Telecommunications from '../assets/telecomminications.png'
import Retail from '../assets/retail.png'
import Marketing from '../assets/marketing.png'


const ChoiceBuisnessDomain = () => {






    return (


        <Modal.Dialog size="xl" id="changeHeightBuisnessdomain" scrollable={true} aria-labelledby="example-modal-sizes-title-xlg"  >
            <Modal.Body id="container" >

                <div id="repository">

                    <Button variant="outline-primary" id="buisnessDomainB">
                        <div>
                            <Card.Img src={Banking} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    Banking
                                </p>
                            </div>
                        </div>
                    </Button>

                </div>

                <div id="repository">

                    <Button variant="outline-primary" id="buisnessDomainFa">
                        <div>
                            <Card.Img src={Fashion} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    Fashion
                                </p>
                            </div>
                        </div>
                    </Button>

                </div>

                <div id="repository">

                    <Button variant="outline-primary" id="buisnessDomainF">
                        <div>
                            <Card.Img src={Finances} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    Finance
                                </p>
                            </div>
                        </div>
                    </Button>

                </div>
                <div id="repository">

                    <Button variant="outline-primary" id="buisnessDomainH">
                        <div>
                            <Card.Img src={Healthcare} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    Healthcare
                                </p>
                            </div>
                        </div>
                    </Button>

                </div>
                <div id="repository">

                    <Button variant="outline-primary" id="buisnessDomainI">
                        <div>
                            <Card.Img src={Insurance} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    Insurance
                                </p>
                            </div>
                        </div>
                    </Button>

                </div>

                <div id="repository">

                    <Button variant="outline-primary" id="buisnessDomainM">
                        <div>
                            <Card.Img src={Manufacturing} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    Manufacturing
                                </p>
                            </div>
                        </div>
                    </Button>

                </div>

                <div id="repository">

                    <Button variant="outline-primary" id="buisnessDomainP">
                        <div>
                            <Card.Img src={Publicsector} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    Public sector
                                </p>
                            </div>
                        </div>
                    </Button>

                </div>

                <div id="repository">

                    <Button variant="outline-primary" id="buisnessDomainR">
                        <div>
                            <Card.Img src={Retail} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    Retail
                                </p>
                            </div>
                        </div>
                    </Button>

                </div>

                <div id="repository">
                    <Button variant="outline-primary" id="buisnessDomainT">
                        <div>
                            <Card.Img src={Telecommunications} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                    Telecommunications
                                </p>
                            </div>
                        </div>
                    </Button>

                </div>

                <div id="repository">
                    <Button variant="outline-primary" id="buisnessDomainMar">
                        <div>
                            <Card.Img src={Marketing} alt="Card image" />
                            <div id="Containerp">
                                <p id="PcreateNotebookBuisness">
                                Marketing
                                </p>
                            </div>
                        </div>
                    </Button>

                </div>




            </Modal.Body>
        </Modal.Dialog>
    )
}

export default ChoiceBuisnessDomain
