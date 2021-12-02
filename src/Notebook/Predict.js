import React, { useEffect, useState, useHistory } from "react";
import { useDispatch, useSelector } from "react-redux";
import Server from "../Config";
import axios from "axios";
import { Form, FormControl, Button, Modal, Table } from "react-bootstrap";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Date from "./FilterDate";
import InputNumber from "./InputNumber";
import InputText from "./InputText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { v4 as uuidv4 } from "uuid";
import MultipleSelect from "./SelectMultiple";
import { GoSettings } from "react-icons/go";
import MultipleSelect2 from "./SelectMultiple2";
const Predict = ({ id }) => {
  const dispatch = useDispatch();

  const tables = useSelector((store) => store.tables);
  const columns = useSelector((store) => store.columns);

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

  // this is a state for the choice of the table option
  const [selectedT, setSelectedOptionT] = useState(null);
  console.log(`Tables Option selected :`, selectedT);

  const onTableauSelected = (tab) => {
    setSelectedTab(tab);
    dispatch({ type: "TABLE_SELECTED", payload: tab });

    if (tab !== null) {
      axios
        .get(`${Server}/data/${tab}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);

          dispatch({ type: "LOAD_COLUMNS", payload: res.data });
        });
      console.log("tableau envoyer" + tab);
    } else {
      console.log("choisi une table ");
    }
  };

  const onColumnSelected = (col) => {
    dispatch({ type: "COLUMN_SELECTED", payload: col });
  };
  const [selectedCol, setSelectedCol] = useState();
  const [lgShow, setLgShow] = useState(false);
  const [value, setValue] = useState();
  const [line, setLine] = useState();

  const addline = () => {
    let tab = [];
    let newObj = {};
    for (let col of value) {
      console.log(col);
      newObj[col] = null;
    }
    newObj.id = uuidv4();
    console.log(newObj.id + "voila c ca lid ");
    tab.push(newObj);

    setLine(tab);
  };
  const createLine = (e,i) => {
    return (
      <>
        <tr>
          {value !== undefined
            ? columns?.map((c, i) => {
                console.log("ligne cree  = " + value);
                console.log(c);
                if (value.includes(c.columnName)) {
                  switch (c.columnType) {
                    case "varchar":
                      return (
                        <td>
                          <InputText key={i} />
                        </td>
                      );
                    case "datetime":
                      return (
                        <td>
                          <Date key={i} />
                        </td>
                      );
                    case "smallint":
                      return (
                        <td>
                          <InputNumber key={i} />
                        </td>
                      );
                  }
                }
              })
            : ""}
        </tr>
      </>
    );
  };

  return (
    <div id={"blockNotebook_" + id}>
      {" "}
      {/* <div id="containerPrincipalMessagesNotebook1">
                                    <div id="containerPrincipalMessagesNotebook2">

                                        <div id="Messages1">
                                            <div id="MessagesI1">
                                                <div id="photoMessages1">
                                                    <div id="Messages1photo">
                                                        <div id="iconCroie">
                                                            <div >
                                                                <FontAwesomeIcon id="iconcroie" icon={faTimes} />
                                                            </div>
                                                            <div id="textMessages1">
                                                                <p id="pmessages1">
                                                                    Nice job @Maya A. <br />
                                                                    In Haroe the genius feeling doesn't go away BTW.
                                                                </p>
                                                            </div>
                                                            <div id="iconMessagesnotebook">
                                                                <FontAwesomeIcon id="iconMessagesnotebook1" icon={faCommentDots} />
                                                            </div>
                                                            <div id="iconMessagesnotebook">
                                                                <FontAwesomeIcon id="iconMessagesnotebook2" icon={faThumbsUp} />
                                                            </div>
                                                            <div id="Nom">
                                                                <p id="nomp">
                                                                    David F.
                                                                </p>
                                                            </div>
                                                            <div id="datemessage">
                                                                <p id="date">
                                                                    30.07.21
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="Messages2">
                                            <div id="MessagesII2">
                                                <div id="photoMessages2">
                                                    <div id="Messages2photo">
                                                        <div id="iconCroie">
                                                            <div >
                                                                <FontAwesomeIcon id="iconcroie" icon={faTimes} />
                                                            </div>
                                                            <div id="textMessages1">
                                                                <p id="pmessages1">
                                                                    Think we should investigate the <br /> boost in sales of coats and boots <br /> in the last week of August. I'll do <br /> code-based data exploration on<br />  my side. Expect PR soon
                                                                </p>
                                                            </div>
                                                            <div id="iconMessagesnotebook2">
                                                                <FontAwesomeIcon id="iconMessagesnotebook1" icon={faCommentDots} />
                                                            </div>
                                                            <div id="iconMessagesnotebook">
                                                                <FontAwesomeIcon id="iconMessagesnotebook2" icon={faThumbsUp} />
                                                            </div>
                                                            <div id="Nom">
                                                                <p id="nomp">
                                                                    Andre D.
                                                                </p>
                                                            </div>
                                                            <div id="datemessage">
                                                                <p id="date">
                                                                    01.08.21
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div> */}
      <div id="containerselect">
        <div id={"nameOfblock" + id}>
          <FormControl
            aria-label="Default"
            aqria-describedby="inputGroup-sizing-default"
            placeholder="Block Name"
            id="nameOfblockPredict"
          />
        </div>

        <div id="Buttonchainecontainer">
          <Form.Select id="selt">
            <option> Task </option>
            <option> Predict </option>
            <option> Explain </option>
            <option> Select </option>
          </Form.Select>
          <div id="iconsetting">
            <GoSettings id="svgsetting" />
          </div>
          <div id="buttonchainenumero4">
            <Form.Select id="selt">
              <option> Budget </option>
              <option> low </option>
              <option> standart </option>
              <option> high </option>
            </Form.Select>
          </div>
          <div id="buttonChaineNumero1">
            <Form.Select onChange={(e) => onTableauSelected(e.target.value)}>
              <option> Table </option>{" "}
              {tables?.map((t) => (
                <option key={t}> {t} </option>
              ))}
            </Form.Select>
          </div>
          <div id="buttonChaineNumero2">
            <Form.Select onChange={(e) => onColumnSelected(e.target.value)}>
              <option> Target </option>{" "}
              {columns?.map((t) => (
                <option key={t.columnName}> {t.columnName} </option>
              ))}
            </Form.Select>
          </div>
          <div>
            <MultipleSelect />
          </div>
          <div>
            <MultipleSelect2 />
          </div>
          <div id="buttonChaineNumero3">
            <Button
              id="buttonprofileofprediction"
              onClick={() => setLgShow(true)}
            >
              {" "}
              Profile Builder{" "}
            </Button>

            <Modal
              size="xl"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
              scrollable={true}
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  <Autocomplete
                    multiple
                    id="tags-filled"
                    options={columns.map((option) => option.columnName)}
                    // onChange={(e) => onColumnSelected(e.target.value)}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        //   onChange={(e) => console.log(e.target.value+'c ca ')}
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
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      {value?.map((t) => (
                        <th key={t}> {t} </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {value !== undefined
                        ? columns?.map((c, i) => {
                            console.log("id = " + i);
                            console.log("selected = " + value);
                            console.log(c);
                            if (value.includes(c.columnName)) {
                              switch (c.columnType) {
                                case "varchar":
                                  return (
                                    <td id={"inputext_" + id}>
                                      <InputText />
                                    </td>
                                  );
                                case "datetime":
                                  return (
                                    <td>
                                      <Date key={i} />
                                    </td>
                                  );
                                case "smallint":
                                  return (
                                    <td>
                                      <InputNumber key={i} />
                                    </td>
                                  );
                              }
                            }
                          })
                        : ""}
                    </tr>

                    {line?.map((e, i) => createLine(e, i))}

                    <AddCircleIcon id="iconhoverlaymodal" onClick={addline} />
                  </tbody>
                </Table>
              </Modal.Body>
            </Modal>
          </div>
          <div id="conatinerbuttonRun">
            <DoubleArrowIcon id="iconrun" />
          </div>{" "}
          <div id="helpblock">
            <HelpOutlineIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predict;
