import { React, useState } from "react";
import { Modal, Button, Form, Accordion } from "react-bootstrap";
import "./choicelibrary.css";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import FolderIcon from "@mui/icons-material/Folder";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
const ChoiceLibrary = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState();
  const [descriptionscl, setDescriptionscl] = useState();

  const createLibray = () => {
    const content = { name: name };
    dispatch({ type: "CREATE_LIBRARY", payload: content });
  };

  const namelibrary = useSelector((store) => store.librairies);
  console.log(namelibrary);
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

      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        id="modallibrary"
        scrollable={true}
      >
        <Modal.Header closeButton>
          <Modal.Title> Save to...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {namelibrary?.map((t) => (
            <div key={t} id="comntainer">
              {/* <FormControlLabel key={t.name} control={<Checkbox />} label={t.name} /> */}
              <Form.Group key={t.name} className="mb-3" controlId="formBasicCheckbox">
                <Form.Check key={t.name} type="checkbox" label={t} />
              </Form.Group>
              <FolderIcon id="iconaddtolibrary" />
            </div>
          ))}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>+ Create new library </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      //   onChange={(e) => setDescriptionscl(e.target.value)}
                      type="text"
                      placeholder="Description"
                    />
                  </Form.Group>

                  <Button variant="primary" onClick={createLibray}>
                    Create
                  </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChoiceLibrary;
