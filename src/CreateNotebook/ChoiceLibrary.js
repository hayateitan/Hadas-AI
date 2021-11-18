import { React, useState } from 'react'
import { Modal, Button, Form, Accordion } from 'react-bootstrap'
import './choicelibrary.css'


const ChoiceLibrary = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (


        <>
            <Form.Floating className="mb-3" id="titleCreateNotebook">
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Title"
                />
                <label htmlFor="floatingInputCustom">Title</label>
            </Form.Floating>

            <Form.Floating className="mb-3" id="descriptionCreateNoteBook">
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Description"
                />
                <label htmlFor="floatingInputCustom">Description</label>
            </Form.Floating>




            <Button variant="primary" onClick={handleShow} id="buttonLibraryText">
                Library
            </Button>

            <Modal show={show} onHide={handleClose} animation={true} id="modallibrary" scrollable={true}>
                <Modal.Header closeButton>
                    <Modal.Title> Save to...</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    <Form.Check aria-label="option 1" />
                    <Form.Check aria-label="option 1" />

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>+ Create new library </Accordion.Header>
                            <Accordion.Body>

                                <Form>
                                    <Form.Group className="mb-3" >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control type="text" placeholder="Description" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Create
                                    </Button>
                                </Form>

                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default ChoiceLibrary
