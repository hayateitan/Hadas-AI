import React from "react";
import "./databse.css";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ImFileText } from "react-icons/im";

const Database = () => {
  return (
    <div>
      <Link to="/CreateDtabase">
        <div id="containerPreviewDtabase">
          <div id="containertextandiconpreviewblock">
            {/* <AddIcon id="iconCreateNoteBook" /> */}
            <p id="Pcreatedatabase">Start with our library of free datasets</p>
          </div>
          <div id="containerbuttoncreatedatabase">
            <Button id="buttoncreatelibrarydatabase">
              {" "}
              <ImFileText id="svgbuttoncreatedatabase" />
              Data library
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Database;
