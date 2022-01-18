import React from "react";
import { Form} from "react-bootstrap";
import './Formtitle.css'
const FormtitleCreateNotebook = () => {
  return (
    <div>
      <Form.Group className="mb-3" id="titleCreateNotebook">
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
      </Form.Group>
    </div>
  );
};

export default FormtitleCreateNotebook;
