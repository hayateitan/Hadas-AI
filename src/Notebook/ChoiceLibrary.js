import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './choicelibrary.css'
import FolderIcon from '@mui/icons-material/Folder';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const ChoiceLibrary = () => {
    return (
        <Modal.Dialog size="xl" scrollable={true} aria-labelledby="example-modal-sizes-title-lg" id="modallibrary" >
            <Modal.Body id="containerlibrary">

                <Stack spacing={2} id="FolderL1">

                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                </Stack>

                <div id="PavatarL">
                    <p id="TeamP">Library #1</p>
                    <p id="TeamP">Library #2</p>
                    <p id="TeamP">Library #3</p>
                </div>

                <Stack spacing={2} id="FolderL2">

                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                </Stack>

                <div id="PavatarL2">
                    <p id="TeamP">Library #4</p>
                    <p id="TeamP">Library #5</p>
                    <p id="TeamP">Library #6</p>
                </div>



                <Stack spacing={2} id="FolderL3">

                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                </Stack>

                <div id="PavatarL3">
                    <p id="TeamP">Library #7</p>
                    <p id="TeamP">Library #8</p>
                    <p id="TeamP">Library #9</p>
                </div>



                <Stack spacing={2} id="FolderL3">

                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                </Stack>

                <div id="PavatarL4">
                    <p id="TeamP">Library #10</p>
                    <p id="TeamP">Library #11</p>
                    <p id="TeamP">Library #12</p>
                </div>
            </Modal.Body>
        </Modal.Dialog>
    )
}

export default ChoiceLibrary
