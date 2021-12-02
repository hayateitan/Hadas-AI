import React from "react";
import "./createdatabase.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { SiDropbox, SiPostgresql, SiAirtable } from "react-icons/si";
import ArticleIcon from "@mui/icons-material/Article";
import {
  FaGoogleDrive,
  FaDatabase,
  FaAmazon,
  FaSnowflake,
  FaHubspot,
} from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { AiOutlineGoogle } from "react-icons/ai";
import { DiMongodb } from "react-icons/di";

const CreateDtabase = () => {
  return (
    <div>
      <h1 id="principaltitlecreatedatabse">Choose Data source</h1>
      <div id="containergridselecttypedatabse">
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
              {" "}
              <div id="bgodbgtitleicon5">
                <div id="bgtitleicon5">
                  <FaDatabase id="mysqlsvg" />
                </div>
              </div>
            </Card.Title>
            <Card.Text>MySQL</Card.Text>
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

        <Card id="cardstyle">
          <Card.Body>
            <Card.Title>
              {" "}
              <div id="bgodbgtitleicon12">
                <div id="bgtitleicon12">
                  <FaHubspot id="hubspotsvg" />
                </div>
              </div>
            </Card.Title>
            <Card.Text>Hubspot</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Upload</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
};

export default CreateDtabase;
