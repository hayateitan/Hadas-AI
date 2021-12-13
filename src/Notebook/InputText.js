import React, { useState } from "react";
import { Form } from "react-bootstrap";

function InputText({ OnTextChanged }) {
  const [inputext, setInputext] = useState();

  const onValueChanged = (e) => {
    setInputext(e.target.value);
    OnTextChanged(e.target.value);
  };

  return (
    <div>
      <Form.Control
        id="inputT"
        type="text"
        placeholder="Type here"
        onChange={onValueChanged}
      />
    </div>
  );
}

export default InputText;
