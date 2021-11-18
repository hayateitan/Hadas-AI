import React from 'react'
import { StickyBallLoading } from 'react-loadingg';
import './slack.css'
const Slack = () => {
    return (
        <div>

            <p id="PWIP">Work in progress</p>
            <div id="containeranimation">
                <StickyBallLoading id="AWIP" />
            </div>

        </div>
    )
}

export default Slack
