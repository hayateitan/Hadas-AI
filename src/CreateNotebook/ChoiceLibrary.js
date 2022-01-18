import { React, useState } from "react";
import { Modal, Button, Form, Accordion, ListGroup } from "react-bootstrap";
import "./choicelibrary.css";
import FolderIcon from "@mui/icons-material/Folder";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const ChoiceLibrary = ({ id }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState();
  const [description, setDescriptionscl] = useState();

  const createNameLibray = () => {
    const content = { name: name, id: uuidv4() };
    dispatch({ type: "CREATE_LIBRARY_NAME", payload: content });
    const content2 = { description: description, id: uuidv4() };
    dispatch({ type: "CREATE_LIBRARY_DESCRIPTION", payload: content2 });
  };

  const namelibrary = useSelector((store) => store.librairiesname);
  const descriptionlibrary = useSelector((store) => store.descriptionname);
  return (
    <>
      {/* <Form.Group className="mb-3" id="titleCreateNotebook">
        <Form.Label id="labelcreatenotebooktitle">Title:</Form.Label>
        <Form.Control
          id="floatingInputCustom1"
          type="text"
          placeholder="Type here..."
        />
      </Form.Group>

      <Form.Group className="mb-3" id="descriptionCreateNoteBook">
        <Form.Label id="labelcreatenotebookdescription">
          Description:
        </Form.Label>
        <Form.Control
          id="floatingInputCustom2"
          type="text"
          placeholder="Type here..."
        />
      </Form.Group> */}

      <Button variant="primary" onClick={handleShow} id="buttonLibraryText">
        <MdOutlineLibraryAdd id="iconaddtolibrarycreatenotebook" />
        <p id="ptextaddtolibrary">Add to Library </p>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        id="modallibrary"
        scrollable={true}
      >
        <Modal.Header>
          <Modal.Title> Save to...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup variant="flush" id="listgroupaddlibrary">
            {namelibrary?.map((t) => (
              <ListGroup.Item id="listacceslevel">
                <div key={t.id} id={t.id}>
                  {/* <FormControlLabel key={t.name} control={<Checkbox />} label={t.name} /> */}
                  <Form.Group
                    key={t.id}
                    className="checkboxOne"
                    controlId={t.id}
                  >
                    <Form.Check
                      key={t.id}
                      type="checkbox"
                      style={{ borderRadius: 5 }}
                      label={t.name}
                    />
                    {descriptionlibrary?.map((t) => (
                      <p key={t.id} id="pdescriptionaddlibrary">
                        {t.description}
                      </p>
                    ))}
                  </Form.Group>
                  <FolderIcon id="iconaddtolibrary" />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>+ Create new library </Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label id="createlibraryname">Name</Form.Label>
                    <Form.Control
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Name"
                      defaultValue={name}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label id="createlibrarydescription">
                      Description
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => setDescriptionscl(e.target.value)}
                      type="text"
                      placeholder="Description"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="button"
                    onClick={createNameLibray}
                  >
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
