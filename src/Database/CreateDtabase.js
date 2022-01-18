import React, { useState } from "react";
import "./createdatabase.css";
import { Modal, ListGroup, Badge } from "react-bootstrap";
import {
  SiDropbox,
  SiPostgresql,
  SiAirtable,
  SiOracle,
  SiMicrosoftsqlserver,
  SiSnowflake,
} from "react-icons/si";
import {
  FaGoogleDrive,
  FaAmazon,
  FaInstagram,
  FaSalesforce,
  FaFileCsv,
} from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";
import FormDatabase from "./FormDatabase";
const CreateDtabase = () => {
  const arrraytest = [
    {
      name: "Airtable",
      icon: <SiAirtable id="iconlistgroup" />,
    },
    {
      name: "BigQuery",
      icon: <AiOutlineGoogle id="iconlistgroup" />,
    },
    {
      name: "CSV File",
      icon: <FaFileCsv id="iconlistgroupcvs" />,
    },
    {
      name: "Dropbox",
      icon: <SiDropbox id="iconlistgroup" />,
    },
    {
      name: "Google Drive",
      icon: <FaGoogleDrive id="iconlistgroup" />,
    },
    {
      name: "Instagram",
      icon: <FaInstagram id="iconlistgroup" />,
    },
    {
      name: "MongoDB",
      icon: <DiMongodb id="iconlistgroup" />,
    },
    {
      name: "Oracle",
      icon: <SiOracle id="iconlistgroup" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql id="iconlistgroup" />,
    },
    {
      name: "Redshift",
      icon: <FaAmazon id="iconlistgroup" />,
    },
    {
      name: "Salesforce",
      icon: <FaSalesforce id="iconlistgroupsaleforce" />,
    },
    {
      name: "Snowflake",
      icon: <SiSnowflake id="iconlistgroup" />,
    },
    {
      name: "SQL Server",
      icon: <SiMicrosoftsqlserver id="iconlistgroup" />,
    },
  ];

  const displaytheform = () => {
    document.getElementById("containerformdatabase").style.display = "block";
  };
  const [namedatabase, setNamedatabase] = useState(arrraytest);
  return (
    <div>
      <div id="optionT">
        <Badge bg="none" id="badgesetting">
          Tables
        </Badge>
      </div>
      <div id="optionS">
        <Badge bg="none" id="badgebudget">
          Schemas
        </Badge>
      </div>
      <div id="optionD">
        <Link to="/mydatabase">
          <Badge bg="none" id="badgeindex">
            Databases
          </Badge>
        </Link>
      </div>
      <div id="optionC">
        <Link to="/CreateDtabase">
          <Badge bg="none" id="badgeindex">
            Connect
          </Badge>
        </Link>
      </div>

      <Modal.Dialog
        size="xl"
        id="changeHeightmodalcreatedatabase"
        scrollable={true}
        aria-labelledby="example-modal-sizes-title-xlg"
        contentClassName="modalcreatedatabase"
      >
        <Modal.Body>
          <ListGroup variant="flush" id="listcreatedatabase">
            {namedatabase?.map((t) => (
              <ListGroup.Item onClick={displaytheform}>
                {" "}
                {t.icon}
                <p id="textlistdataimport">{t.name}</p>
                <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal.Dialog>
      <FormDatabase />
    </div>
  );
};

export default CreateDtabase;
