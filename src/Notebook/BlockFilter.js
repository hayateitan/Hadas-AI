import React from 'react'
import { Button, Modal, Card, FormControl, Form } from 'react-bootstrap'
const BlockFilter = ({ id }) => {
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


                    {/* <Form.Select>

                        <option > </option>

                    </Form.Select> */}
                </Card.Body>
            </Card>

        </div>




    )
}

export default BlockFilter
