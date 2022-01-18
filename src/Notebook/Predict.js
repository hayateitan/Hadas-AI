import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Server from "../Config";
import axios from "axios";
import { Form, FormControl, Button, Modal, Badge } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { GoSettings } from "react-icons/go";
import Task from "./Task";
import Budget from "./Budget";
import PredictTable from "./PredictTable";
import { FaRegComment } from "react-icons/fa";
import TableTiUi from "./TableTiUi";
import { VscRunAll } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { ImEyeBlocked } from "react-icons/im";
import { Tooltip, Overlay } from "react-bootstrap";
import Outpout from "./Outpout";
import Commentary from "./Commentary";

const Predict = ({ id }) => {
  const dispatch = useDispatch();

  const tables = useSelector((store) => store.tables);
  const columns = useSelector((store) => store.columns);
  // const selectedColumns = useSelector((store) => store.selectedColumn);
  //let history = useHistory();
  let token = sessionStorage.getItem("jwt");
  /*if (token === null || token === undefined) {
            history.push("/login");
        }*/

  const [selectedTab, setSelectedTab] = useState();

  useEffect(() => {
    getAllTables();
  }, []);

  const getAllTables = async () => {
    const res = await axios.get(`${Server}/data`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({ type: "LOAD_TABLES", payload: res.data });
  };

  const onTableauSelected = (tab) => {
    setSelectedTab(tab);
    dispatch({ type: "TABLE_SELECTED", payload: tab });

    if (tab !== null) {
      axios
        .get(`${Server}/data/${tab}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          dispatch({ type: "LOAD_COLUMNS", payload: res.data });
        });
    }
  };

  const onColumnSelected = (col) => {
    dispatch({ type: "COLUMN_SELECTED", payload: col });
  };
  const test150 = () => {
    console.log("c bon ca marceh test150");
  };
  const [lgShow, setLgShow] = useState(false);
  const [value, setValue] = useState();
  // const [line, setLine] = useState([]);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [cachecommentarybox, setCachecommentarybox] = useState(true);

  function statecachecommentarybox() {
    if (cachecommentarybox === false) {
      setCachecommentarybox(true);
    }
    if (cachecommentarybox === true) {
      setCachecommentarybox(false);
    }
  }
  function cacheCommentaryBox() {
    if (cachecommentarybox === true) {
      document.getElementById("divcommentaryboxcontainer").style.display =
        "none";
    }
    if (cachecommentarybox === false) {
      document.getElementById("divcommentaryboxcontainer").style.display =
        "block";
    }
  }
  useEffect(() => {
    cacheCommentaryBox();
  });
  return (
    <div id={"blockNotebook_" + id}>
      {" "}
      <div id="containerselect">
        <div id={"nameOfblock" + id}>
          <FormControl
            aria-label="Default"
            aqria-describedby="inputGroup-sizing-default"
            placeholder="Block Name"
            id="nameOfblockPredict"
          />
        </div>
        <div id="conatinerbuttonRun">
          <Button id="Biconhoverlaybuttonrun" onClick={test150}>
            <VscRunAll id="iconrun" />
          </Button>
          <p id="textbuttonrun">RUN</p>
        </div>{" "}
        <div id="buttonchaineeyescach">
          <ImEyeBlocked id="eyescach" />
        </div>
        <div id="buttonchainecommentaire">
          <FaRegComment
            id="buttoncommentaire"
            type="button"
            onClick={statecachecommentarybox}
          />
        </div>
        <div>
          <div id="containerbuttonplus">
            <Button
              id="Biconhoverlaybuttonplus"
              ref={target}
              onClick={() => setShow(!show)}
            >
              <IoSettingsOutline
                ref={target}
                onClick={() => setShow(!show)}
                id="iconbuttonplus"
              />
            </Button>

            <Overlay target={target.current} show={show} placement="right">
              {(props) => (
                <Tooltip id="overlay-example" {...props} className="in">
                  <div id="optionplus">
                    <div id="iconsetting">
                      <Badge bg="none" id="badgesetting">
                        {" "}
                        <GoSettings id="svgsetting" />
                        <p id="textsetting">SETTING</p>
                      </Badge>
                    </div>
                    <div id="buttonchainebudget">
                      <Badge bg="none" id="badgebudget">
                        {" "}
                        <Budget />
                        <p id="textBUDGET">BUDGET</p>
                      </Badge>
                    </div>
                    <div id="buttonchaineimtable">
                      <Badge bg="none" id="badgeindex">
                        {" "}
                        <TableTiUi /> <p id="textindex">INDEX</p>
                      </Badge>
                    </div>
                  </div>
                </Tooltip>
              )}
            </Overlay>
          </div>
        </div>
        <div id="Buttonchainecontainer">
          <div id="buttonChaineNumero1">
            <Form.Select onChange={(e) => onTableauSelected(e.target.value)}>
              <option> Pick a Data Source </option>{" "}
              {tables?.map((t) => (
                <option key={t}> {t} </option>
              ))}
            </Form.Select>
          </div>
          <Task />
          <div id="buttonChaineNumero2">
            <Form.Select onChange={(e) => onColumnSelected(e.target.value)}>
              <option> Define Your Target </option>{" "}
              {columns?.map((t) => (
                <option key={t.columnName}> {t.columnName} </option>
              ))}
            </Form.Select>
          </div>

          <div id="buttonChaineNumero3">
            <Button
              id="buttonprofileofprediction"
              onClick={() => setLgShow(true)}
            >
              {" "}
              Build Prediction Profiles{" "}
            </Button>

            <Modal
              size="xl"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
              scrollable={true}
            >
              <Modal.Header>
                <Modal.Title id="example-modal-sizes-title-lg">
                  <Autocomplete
                    multiple
                    id="tags-filled"
                    options={columns.map((option) => option.columnName)}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="filled"
                        label="Columns to display"
                        placeholder="Columns to display"
                      />
                    )}
                  />
                </Modal.Title>{" "}
              </Modal.Header>{" "}
              <Modal.Body>
                <PredictTable selectedColumns={value} columns={columns} />
              </Modal.Body>
            </Modal>
          </div>

          {/* <div id="helpblock">
            <HelpOutlineIcon />
          </div> */}
        </div>
      </div>
      <div id="outpout">
        <Outpout />
      </div>
      <div id="divcommentaryboxcontainer">
        <Commentary />
      </div>
    </div>
  );
};

export default Predict;
