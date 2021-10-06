import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Explain = ({ id }) => {

    useEffect(() => {
        getAllTables();

    }, []);


    const [tables, setTables] = useState();

    const getAllTables = async () => {
        const res = await axios.get(`http://localhost:3002/recuperetableaux`)
        setTables(res.data)
    }



    const [column, setColumn] = useState();


    // this is a state for the choice of the table option 
    const [selectedT, setSelectedOptionT] = useState(null);
    console.log(`Tables Option selected :`, selectedT);





    const onTableauSelected = (tab) => {
        setSelectedOptionT(tab)
        if (tab !== null) {
            axios.post(`http://localhost:3002/recupereColumn`, { Tableau: tab })
                .then((res) => {
                    console.log(res);
                    setColumn(res.data)

                });
            console.log('tableau envoyer' + tab)
        } else {
            console.log('choisi une table ')
        }
    }



    return (
        <div id={'blockNotebook_' + id}>

            <div id="containerselect">

                <div id="textblock">
                    <h6 id="titreblockexplain">Explain</h6>
                </div>

                <div id="Buttonchainecontainer">

                    <div id="buttonChaineNumero1">

                        <Form.Select onChange={(e) => onTableauSelected(e.target.value)}>
                            {
                                tables?.map(
                                    t => (
                                        <option key={t.Tables_in_tableharoe}>{t.Tables_in_tableharoe} </option>
                                    )
                                )
                            }
                        </Form.Select>

                    </div>

                    <div id="buttonChaineNumero2">
                        <Form.Select>
                            {
                                column?.map(
                                    t => (
                                        <option key={t.COLUMN_NAME}>{t.COLUMN_NAME} </option>
                                    )
                                )
                            }
                        </Form.Select>
                    </div>

                    <div id="iconPlus1Block" >
                        <FontAwesomeIcon id="iconplus1" icon={faPlus} />

                    </div>


                </div>
                <div id="conatinerbuttonRun">
                    <Button>Run!</Button>
                </div>
            </div >

        </div >
    )
}



export default Explain
