import React from 'react'
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont } from '@fortawesome/free-solid-svg-icons'
import { faGlasses } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { Form ,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
const Explain = () => {

    // useEffect(() => {
    //     timer = setTimeout(mafonction, 5000);
    // }, [])

    // function mafonction() {
    //     document.getElementById("editeur-de-code").style.visibility = "collapse"
    // }

    // function onMouseOver() {
    //     clearTimeout(timer)
    //     document.getElementById("editeur-de-code").style.visibility = "visible"
    //     timer = setTimeout(mafonction, 5000);
    // }

    // let timer


    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }




    return (
        <div>

            {/* <div id="containerPrincipalMessagesNotebook1">
                <div id="containerPrincipalMessagesNotebook2">

                    <div id="Messages1">
                        <div id="MessagesI1">
                            <div id="photoMessages1">
                                <div id="Messages1photo">
                                    <div id="iconCroie">
                                        <div >
                                            <FontAwesomeIcon id="iconcroie" icon={faTimes} />
                                        </div>
                                        <div id="textMessages1">
                                            <p id="pmessages1">
                                                Nice job @Maya A. <br />
                                                In Haroe the genius feeling doesn't go away BTW.
                                            </p>
                                        </div>
                                        <div id="iconMessagesnotebook">
                                            <FontAwesomeIcon id="iconMessagesnotebook1" icon={faCommentDots} />
                                        </div>
                                        <div id="iconMessagesnotebook">
                                            <FontAwesomeIcon id="iconMessagesnotebook2" icon={faThumbsUp} />
                                        </div>
                                        <div id="Nom">
                                            <p id="nomp">
                                                David F.
                                            </p>
                                        </div>
                                        <div id="datemessage">
                                            <p id="date">
                                                30.07.21
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="Messages2">
                        <div id="MessagesII2">
                            <div id="photoMessages2">
                                <div id="Messages2photo">
                                    <div id="iconCroie">
                                        <div >
                                            <FontAwesomeIcon id="iconcroie" icon={faTimes} />
                                        </div>
                                        <div id="textMessages1">
                                            <p id="pmessages1">
                                                Think we should investigate the <br /> boost in sales of coats and boots <br /> in the last week of August. I'll do <br /> code-based data exploration on<br />  my side. Expect PR soon
                                            </p>
                                        </div>
                                        <div id="iconMessagesnotebook2">
                                            <FontAwesomeIcon id="iconMessagesnotebook1" icon={faCommentDots} />
                                        </div>
                                        <div id="iconMessagesnotebook">
                                            <FontAwesomeIcon id="iconMessagesnotebook2" icon={faThumbsUp} />
                                        </div>
                                        <div id="Nom">
                                            <p id="nomp">
                                                Andre D.
                                            </p>
                                        </div>
                                        <div id="datemessage">
                                            <p id="date">
                                                01.08.21
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}

            <div id="iconPlus2Notebok" >
                <Link to="/Explain"  >
                    <FontAwesomeIcon id="iconcode1" icon={faGlasses} />

                </Link>


            </div>
            <div id="iconPlus1Notebok" >

                <Link to="/Notebook"  >
                    <FontAwesomeIcon id="iconplus1" icon={faFont} />

                </Link>

            </div>
            <div id="iconPlus3Notebok" >

                <Link to="/Predict"  >
                    <FontAwesomeIcon id="iconplus3" icon={faChartLine} />
                </Link>

            </div>

            {/* <div id="divSetDisplaynone" onMouseOver={onMouseOver}>
                <div id="editeur-de-code">
                    <p>

                        {editors.map(e => <div ><Editeur key={e.id} /></div>)}<br />
                    </p>
                </div>
            </div> */}

            <div id="containerselect">

                {/* <div id="iconcodecontainercelule"><FontAwesomeIcon id="iconcode2" icon={faCode} /></div> */}
                <div id="textblock">
                    <h6 id="titreblockexplain">Predict</h6>
                </div>

                <div id="Buttonchainecontainer">

                    <div id="buttonChaineNumero1">
                        <Form.Select>
                            <option>Table </option>
                        </Form.Select>
                    </div>

                    <div id="buttonChaineNumero2">
                        <Form.Select>
                            <option>Column</option>
                        </Form.Select>
                    </div>

                    <div id="buttonChaineNumero3">
                        <Form.Select>
                            <option>Filter 1</option>
                        </Form.Select>
                    </div>

                    <div id="buttonChaineNumero4">
                        <Form.Select>
                            <option> Filter 2</option>
                        </Form.Select>
                    </div>

                    <div id="buttonChaineNumero5">
                        <Form.Select>
                            <option> Filter 3</option>
                        </Form.Select>
                    </div>

                </div>
                <div id="conatinerbuttonRun">
                    <Button>Run!</Button>
                </div>
            </div>



        </div>
    )

}

export default Explain
