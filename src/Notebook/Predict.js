import React, { useEffect, useState, useHistory } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Server from '../Config'
import axios from 'axios';
import { Form, FormControl } from 'react-bootstrap';
import CeluleFilter from './Celulefilter'
import { UilTelegramAlt } from '@iconscout/react-unicons'


const Predict = ({ id }) => {

    const dispatch = useDispatch();

    const tables = useSelector(store => store.tables);
    const columns = useSelector(store => store.columns);

    //let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    /*if (token === null || token === undefined) {
        history.push("/login");
    }*/

    const [selectedTab, setSelectedTab] = useState()

    useEffect(() => {
        getAllTables();

    }, []);

    const getAllTables = async () => {
        const res = await axios.get(`${Server}/data`, { headers: { "Authorization": `Bearer ${token}` } })

        dispatch({ type: "LOAD_TABLES", payload: res.data });
    }

    // this is a state for the choice of the table option 
    const [selectedT, setSelectedOptionT] = useState(null);
    console.log(`Tables Option selected :`, selectedT);

    const onTableauSelected = (tab) => {
        setSelectedTab(tab)
        dispatch({ type: "TABLE_SELECTED", payload: tab })

        if (tab !== null) {
            axios.get(`${Server}/data/${tab}`, { headers: { "Authorization": `Bearer ${token}` } })
                .then((res) => {
                    console.log(res);

                    dispatch({ type: "LOAD_COLUMNS", payload: res.data })

                });
            console.log('tableau envoyer' + tab)
        } else {
            console.log('choisi une table ')
        }
    }

    const onColumnSelected = (col) => {
        dispatch({ type: "COLUMN_SELECTED", payload: col })
    }





    // const [celule, setCelule] = useState([])

    // const addCelule = () => {
    //     console.log("add")
    //     let newCelule = [...celule, { id: uuidv4(), type: "filter" }]
    //     setCelule(newCelule)
    // }

    // const createCelule = (e) => {
    //     console.log(e)
    //     if (e.type === "filter") {
    //         return <CeluleFilter id={e.id} key={e.id} />

    //     }

    // }



    return (
        <div id={'blockNotebook_' + id}>


            <div id="containerselect">
                <div id={"nameOfblock" + id} >

                    <FormControl
                        aria-label="Default"
                        aqria-describedby="inputGroup-sizing-default"
                        placeholder="Block Name"
                        id="nameOfblockPredict"
                    />



                </div>

                <div id="textblock">
                    <h6 id="titreblockexplain">P</h6>
                </div>

                <div id="Buttonchainecontainer">

                    <div id="buttonChaineNumero1">

                        <Form.Select onChange={(e) => onTableauSelected(e.target.value)}>
                            <option>Select...</option>
                            {
                                tables?.map(
                                    t => (
                                        <option key={t}>{t} </option>
                                    )
                                )
                            }
                        </Form.Select>

                    </div>

                    <div id="buttonChaineNumero2">
                        <Form.Select onChange={(e) => onColumnSelected(e.target.value)}>
                                 <option>Select...</option>
                            {
                                columns?.map(
                                    t => (
                                        <option key={t.columnName}>{t.columnName} </option>
                                    )
                                )
                            }
                        </Form.Select>
                    </div>


                    {/* {celule?.map(e => createCelule(e))} */}


                    {/* <div id="iconPlus1Block" >
                        <FontAwesomeIcon id="iconplus1" icon={faPlus} onClick={addCelule} />

                    </div> */}

                    <div id="buttonmodalcelule">
                        <CeluleFilter tab={selectedTab}/>
                    </div>

                    <div id="conatinerbuttonRun">
                        <UilTelegramAlt id="iconrun"></UilTelegramAlt>

                    </div>

                </div>

            </div >

        </div >
    )
}



export default Predict
