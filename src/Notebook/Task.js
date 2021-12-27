import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Task.css";
const Task = () => {
  const [task, setTask] = useState();
  return (
    <div>
      <Form.Select onChange={(e) => setTask(e.target.value)}>
      <option> Pick a Task </option>{" "}
        <option> Predict </option>{" "}
        <option> Explain </option>{" "}
        <option> Select </option>{" "}
      </Form.Select>
    </div>
  );
};

export default Task;
