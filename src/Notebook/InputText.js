import React, { useEffect, useState, useHistory } from "react";
import { Form } from "react-bootstrap";
const InputText = () => {
  const [inputext, setInputext] = useState();
  console.log(inputext);
  return (
    <div>
      <Form.Control
        id="inputT"
        type="text"
        placeholder="Type here"
        onChange={(e) => setInputext(e.target.value)}
      />
    </div>
  );
};

export default InputText;
