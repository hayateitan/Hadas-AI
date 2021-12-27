import React, { useState } from "react";
import { Form } from "react-bootstrap";

function InputText({ OnTextChanged, value }) {
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
        defaultValue={value}
        placeholder="Type here"
        onChange={onValueChanged}
      />
    </div>
  );
}

export default InputText;
