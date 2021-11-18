import React from 'react'
import './AdvancedMode.css'
import { Button } from 'react-bootstrap'
const AdvancedMode = () => {
    return (
        <div id="containerAdvancedMode">
            <p id="AdvancedModetitrePrincipal">Advanced mode by default ?</p>
            <Button variant="primary" id="ButonnYes">Yes</Button>
            <Button variant="primary" id="ButonnNo">No</Button>
        </div>
    )
}

export default AdvancedMode
