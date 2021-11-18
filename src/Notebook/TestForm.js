import React, { useEffect, useState, useHistory } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Server from '../Config';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import './testform.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Date from './FilterDate'
import InputNumber from './InputNumber'
import InputText from './InputText'
const TestForm = (props) => {

    let token = sessionStorage.getItem('jwt');

    const dispatch = useDispatch();

    const tables = useSelector(store => store.tables);

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

    // this is a state for the choice of the table option 

    const [selectedTab, setSelectedTab] = useState()
    const [selectedCol, setSelectedCol] = useState()

    useEffect(() => {
        getAllTables();

    }, []);

    const getAllTables = async () => {
        const res = await axios.get(`${Server}/data`, { headers: { "Authorization": `Bearer ${token}` } })

        dispatch({ type: "LOAD_TABLES", payload: res.data });
    }

    const onColumnSelected = (col) => {
        dispatch({ type: "COLUMN_SELECTED", payload: col })
        setSelectedCol(col)
        console.log('c' + col)
    }
    const columns = useSelector(store => store.columns);

    return (
        <div>


            <Form id="Formtest">
                <Form.Select id="sel1" onChange={(e) => onTableauSelected(e.target.value)}>
                    <option>Select Table</option>
                    {
                        tables?.map(
                            t => (
                                <option key={t}>{t} </option>
                            )
                        )
                    }
                </Form.Select>

                <Form.Select id="selt" >
                    <option>Select option</option>
                    <option>Predict</option>
                    <option>Explain</option>
                    <option>Select</option>
                </Form.Select>

                <Form.Select onChange={(e) => onColumnSelected(e.target.value)} id="selc">
                    <option>Select colunm</option>
                    {
                        columns?.map(
                            (t, i) => (
                                <option key={t.columnName} value={i}>{t.columnName} </option>
                            )
                        )
                    }
                </Form.Select>


                {/* <Autocomplete
                    id="selc"
                    options={columns.map((option) => option.columnName)}
                    renderInput={(params) => <TextField onChange={(e) => onColumnSelected(e.target.value)} {...params} label="Select..." />}
                /> */}



                {
                    (selectedCol !== undefined) ?
                        columns?.map((c, i) => {

                            console.log("id = " + i)
                            console.log("selected = " + selectedCol)
                            if (i != selectedCol) {
                                console.log(c)
                                switch (c.columnType) {
                                    case "varchar":
                                        return <Form.Label>
                                            {c.columnName}
                                            <InputText key={i} />
                                        </Form.Label>
                                    case "datetime":
                                        return <Form.Label>
                                            {c.columnName}
                                            <Date key={i} />
                                        </Form.Label>
                                    case "smallint":
                                        return <Form.Label>
                                            {c.columnName}
                                            <InputNumber key={i} />
                                        </Form.Label>
                                }

                            }

                        }) : ''
                }






            </Form>


        </div>
    )
}

export default TestForm

