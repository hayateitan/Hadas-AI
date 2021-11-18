import { React, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar1 from '../assets/Avatar1.png'
import Avatar2 from '../assets/Avatar2.png'
import Avatar3 from '../assets/Avatar3.png'
import Avatar4 from '../assets/Avatar4.png'
import Avatar5 from '../assets/Avatar5.png'
import Avatar1solo from '../assets/Avatar1solo.png'
import Avatar2solo from '../assets/Avatar2solo.png'
import AvatarG1 from '../assets/AvatarG1.png'
import AvatarG2 from '../assets/AvatarG2.png'
import AvatarD from '../assets/AvatarD.png'
import AvatarD2 from '../assets/AvatarD2.png'
import AvatarS1 from '../assets/AvatarS1.png'
import AvatarS2 from '../assets/AvatarS2.png'
import Stack from '@mui/material/Stack';
import { Modal, Button } from 'react-bootstrap';
import { deepOrange, deepPurple, blue, green, red } from '@mui/material/colors';
import './Teamsharing.css'
const TeamSharing = () => {
    const [lgShow, setLgShow] = useState(false);
    return (
        <div id="containerTeamsharing">
            <h1 id="titlePrincipal"> Teams</h1>
            <h1 id="titlePrincipal2"> Budget Manager</h1>
            <h1 id="titlePrincipal3"> Rights</h1>

            <Stack spacing={2} id="AvatarL">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>

                <Avatar sx={{ bgcolor: deepPurple[500] }}>I</Avatar>

                <Avatar sx={{ bgcolor: blue[500] }}>D</Avatar>

                <Avatar sx={{ bgcolor: green[500] }}>D</Avatar>

                <Avatar sx={{ bgcolor: red[500] }}>S</Avatar>

            </Stack>
            <div id="Pavatar">
                <p id="TeamP">Marketing</p>
                <p id="TeamP">Inventory</p>
                <p id="TeamP">Designers</p>
                <p id="TeamP">Data scientists</p>
                <p id="TeamP"> Sales</p>
            </div>

            <Stack spacing={2} id="AvatarG">
                <AvatarGroup max={4} id="avatargroup1">
                    <Avatar alt="Remy Sharp" src={Avatar1} />
                    <Avatar alt="Travis Howard" src={Avatar2} />
                    <Avatar alt="Cindy Baker" src={Avatar3} />
                    <Avatar alt="Agnes Walker" src={Avatar4} />
                    <Avatar alt="Trevor Henderson" src={Avatar5} />
                </AvatarGroup>


                <AvatarGroup max={2} id="AvatarG2">
                    <Avatar alt="Remy Sharp" src={Avatar1solo} />
                    <Avatar alt="Remy Sharp" src={Avatar2solo} />
                </AvatarGroup>

                <AvatarGroup max={2} id="AvatarG3">
                    <Avatar alt="Remy Sharp" src={AvatarG1} />
                    <Avatar alt="Travis Howard" src={AvatarG2} />
                </AvatarGroup>

                <AvatarGroup max={2} id="AvatarG4" >
                    <Avatar alt="Remy Sharp" src={AvatarD} />
                    <Avatar alt="Travis Howard" src={AvatarD2} />
                </AvatarGroup>
                <AvatarGroup max={2} id="AvatarG5">
                    <Avatar alt="Remy Sharp" src={AvatarS1} />
                    <Avatar alt="Travis Howard" src={AvatarS2} />
                </AvatarGroup>
            </Stack>
            <Stack spacing={2} id="Button">
                <Button id="B1" onClick={() => setLgShow(true)}>Edit</Button>
                <Button id="B2" onClick={() => setLgShow(true)}>Edit</Button>
                <Button id="B3" onClick={() => setLgShow(true)}>Edit</Button>
                <Button id="B4" onClick={() => setLgShow(true)}>Edit</Button>
                <Button id="B5" onClick={() => setLgShow(true)}>Edit</Button>

            </Stack>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>in progress </Modal.Body>
            </Modal>
        </div>
    )
}

export default TeamSharing
