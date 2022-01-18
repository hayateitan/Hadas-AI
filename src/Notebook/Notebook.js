import React from "react";
import "./style.css";
import { UilPen } from '@iconscout/react-unicons'
import { Link } from "react-router-dom";
const Notebook = () => {
  return (
    <div>
      <Link to="/CreateNoteBook">
        <button type="button" id="CreateNoteNook">
          <div>
            <UilPen id="iconCreateNoteBook" />
            <p id="PcreateNotebook">Create a notebook</p>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Notebook;
