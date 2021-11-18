import React from 'react'
import './inputnumber.css'
import { Form, FormControl } from 'react-bootstrap';
const InputNumber = () => {
    return (
        <div>
            <Form.Control id="inputN" type="number" placeholder="Type a number" />
        </div>
    )
}

export default InputNumber
