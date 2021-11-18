import React from 'react'
import { Button } from 'react-bootstrap'
import './AlgoOption.css'
const AlgoOption = () => {
    return (
        <div id="containerAlgoOption">
            <p id="AdvancedModetitrePrincipal">Algorithmic Options</p>
            <Button variant="primary" id="ButonnP">Prediction</Button>
            <Button variant="primary" id="ButonnE">Explain</Button>
        </div>
    )
}

export default AlgoOption
