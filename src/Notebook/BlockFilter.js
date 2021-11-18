import { useState, React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, FormControl, Form } from 'react-bootstrap'
import { UilPlusCircle } from '@iconscout/react-unicons'
import './Blockfilter.css'
import Date from './FilterDate'
const BlockFilter = ({ id, tab }) => {

    const dispatch = useDispatch();
    const columns = useSelector(store => store.columns)

    //     const [filters, setFilters] = useState();
    // console.log(columns.columnType)
    const onColumnSelected = (col) => {
        console.log(tab+"tab")
        console.log(col+"col")
        dispatch({ type: "ADD_FILTER", payload: { table: tab, filter: { column: col } } })
    }

    return (



        <div id={'blockfilter' + id}>
            <Card style={{ width: '60rem' }} id="cardFilter">
                <Card.Body>
                    <FormControl
                        aria-label="Default"
                        aqria-describedby="inputGroup-sizing-default"
                        placeholder="Block Name"
                        id="nameOfblockPredictfilter"
                    />

                    <UilPlusCircle id="iconrecentfilter" />
                    <div id="buttonF1">
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
                    <Date />
                </Card.Body>
            </Card>

        </div>




    )
}

export default BlockFilter
