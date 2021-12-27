import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Budget.css";
import { AiOutlineFieldTime } from "react-icons/ai";
const Budget = () => {
  const [budget, setBudget] = useState();

  return (
    <div>
      <AiOutlineFieldTime id='buttontimebudget' />
      {/* <Form.Select onChange={(e) => setBudget(e.target.value)}>
        <option> Budget </option> <option> Low </option>{" "}
        <option> Standard </option> <option> High </option>{" "}
      </Form.Select> */}
    </div>
  );
};

export default Budget;
