import React from "react";
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
import ArticleIcon from "@mui/icons-material/Article";
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
  const displaytheform = () => {
    document.getElementById("containerformdatabase").style.display = "block";
  };
  return (
    <div>
      {/* <h1 id="principaltitlecreatedatabse">Choose Data source</h1> */}
      {/* <div id="containergridselecttypedatabse">
        <Card id="cardstyle">
          <Card.Body>
            <Card.Title>
              <div id="bgodbgtitleicon">
                <div id="bgtitleicon">
                  <ArticleIcon id="csvsvg" />
                </div>
              </div>
            </Card.Title>
            <Card.Text>CSV Files</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Upload</ListGroupItem>
          </ListGroup>
        </Card>

        <Card id="cardstyle">
          <Card.Body>
            <Card.Title>
              <div id="bgodbgtitleicon2">
                <div id="bgtitleicon2">
                  <SiDropbox id="dropboxsvg" />
                </div>
              </div>
            </Card.Title>
            <Card.Text>Dropbox</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Upload</ListGroupItem>
          </ListGroup>
        </Card>

        <Card id="cardstyle">
          <Card.Body>
            <Card.Title>
              <div id="bgodbgtitleicon3">
                <div id="bgtitleicon3">
                  <SiAirtable id="airtablesvg" />
                </div>
              </div>
            </Card.Title>
            <Card.Text>Airtable</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Upload</ListGroupItem>
          </ListGroup>
        </Card>

        <Card id="cardstyle">
          <Card.Body>
            <Card.Title>
              {" "}
              <div id="bgodbgtitleicon4">
                <div id="bgtitleicon4">
                  <FaGoogleDrive id="googledrivesvg" />
                </div>
              </div>
            </Card.Title>
            <Card.Text>Google Drive</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Upload</ListGroupItem>
          </ListGroup>
        </Card>


        <Card id="cardstyle">
          <Card.Body>
            <Card.Title>
              <div id="bgodbgtitleicon6">
                <div id="bgtitleicon6">
                  <SiPostgresql id="postgressqlsvg" />
                </div>
              </div>
            </Card.Title>
            <Card.Text>PostgreSQL</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Upload</ListGroupItem>
          </ListGroup>
        </Card>

        <Card id="cardstyle">
          <Card.Body>
            <Card.Title>
              {" "}
              <div id="bgodbgtitleicon7">
                <div id="bgtitleicon7">
                  <MdWindow id="serversqlsvg" />
                </div>
              </div>
            </Card.Title>
            <Card.Text>SQL Server</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Upload</ListGroupItem>
          </ListGroup>
        </Card>

        <Card id="cardstyle">
          <Card.Body>
            <Card.Title>
              {" "}
              <div id="bgodbgtitleicon8">
                <div id="bgtitleicon8">
                  <FaAmazon id="redshiftsvg" />
                </div>
              </div>
            </Card.Title>
            <Card.Text>Redshift </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Upload</ListGroupItem>
          </ListGroup>
        </Card>

        <Card id="cardstyle">
          <Card.Body>
            <Card.Title>
              {" "}
              <div id="bgodbgtitleicon9">
                <div id="bgtitleicon9">
                  <AiOutlineGoogle id="bigquerysvg" />
                </div>
              </div>
            </Card.Title>
            <Card.Text>BigQuery</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Upload</ListGroupItem>
          </ListGroup>
        </Card>

        <Card id="cardstyle">
          <Card.Body>
            <Card.Title>
              {" "}
              <div id="bgodbgtitleicon10">
                <div id="bgtitleicon10">
                  <DiMongodb id="mongodbsvg" />
                </div>
              </div>
            </Card.Title>
            <Card.Text>MongoDB</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Upload</ListGroupItem>
          </ListGroup>
        </Card>

        <Card id="cardstyle">
          <Card.Body>
            <Card.Title>
              {" "}
              <div id="bgodbgtitleicon11">
                <div id="bgtitleicon11">
                  <FaSnowflake id="snowflakesvg" />
                </div>
              </div>
            </Card.Title>
            <Card.Text>Snowflake</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Upload</ListGroupItem>
          </ListGroup>
        </Card>

      </div> */}

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
          <ListGroup variant="flush">
            <ListGroup.Item>
              {" "}
              <SiAirtable id="iconlistgroup" />
              <p id="textlistdataimport">Airtable</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>
            <ListGroup.Item>
              <AiOutlineGoogle id="iconlistgroup" />
              <p id="textlistdataimport">BigQuery</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>
            <ListGroup.Item>
              <FaFileCsv id="iconlistgroupcvs" />
              <p id="textlistdataimport">CSV File</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>
            <ListGroup.Item>
              <SiDropbox id="iconlistgroup" />
              <p id="textlistdataimport">Dropbox</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>
            <ListGroup.Item>
              <FaGoogleDrive id="iconlistgroup" />
              <p id="textlistdataimport">Google Drive</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram id="iconlistgroup" />{" "}
              <p id="textlistdataimport">Instagram</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>
            <ListGroup.Item>
              <DiMongodb id="iconlistgroup" />
              <p id="textlistdataimport">MongoDB</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>
            <ListGroup.Item>
              <SiOracle id="iconlistgroup" />{" "}
              <p id="textlistdataimport">Oracle</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>

            <ListGroup.Item onClick={displaytheform}>
              <SiPostgresql id="iconlistgroup" />
              <p id="textlistdataimport">PostgreSQL</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>

            <ListGroup.Item>
              <FaAmazon id="iconlistgroup" />
              <p id="textlistdataimport">Redshift</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>
            <ListGroup.Item>
              <FaSalesforce id="iconlistgroupsaleforce" />
              <p id="textlistdataimport">Salesforce</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>
            <ListGroup.Item>
              <SiSnowflake id="iconlistgroup" />
              <p id="textlistdataimport">Snowflake</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>
            <ListGroup.Item>
              <SiMicrosoftsqlserver id="iconlistgroup" />
              <p id="textlistdataimport">SQL Server</p>
              <BsFillArrowRightCircleFill id="arrowcreatedatabaselistgroup" />
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal.Dialog>
      <FormDatabase />
    </div>
  );
};

export default CreateDtabase;
