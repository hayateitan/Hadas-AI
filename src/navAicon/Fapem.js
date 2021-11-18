import { React, useState, useRef } from 'react'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { Overlay, Popover } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StickyBallLoading } from 'react-loadingg';

const Fapem = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div ref={ref}>
            <FontAwesomeIcon icon={faPen} onClick={handleClick} color="white" size='lg' />
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                <Popover.Header as="h3"> Coming soon</Popover.Header>
                    <Popover.Body>
                        <div id="containeranimation2">
                            <StickyBallLoading id="AWIP" />
                        </div>
                    </Popover.Body>
                </Popover>
            </Overlay>
        </div>
    )
}

export default Fapem
