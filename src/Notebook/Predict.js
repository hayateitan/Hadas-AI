import React, { useEffect, useState, useHistory } from "react";
import { useDispatch, useSelector } from "react-redux";
import Server from "../Config";
import axios from "axios";
import { Form, FormControl, Button, Modal, Table } from "react-bootstrap";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputNumber from "./InputNumber";
import InputText from "./InputText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { v4 as uuidv4 } from "uuid";
import MultipleSelect from "./SelectMultiple";
import { GoSettings } from "react-icons/go";
import MultipleSelect2 from "./SelectMultiple2";
import Task from "./Task";
import Budget from "./Budget";
import Date from "./FilterDate";
const Predict = ({ id }) => {
  const dispatch = useDispatch();

  const tables = useSelector((store) => store.tables);
  const columns = useSelector((store) => store.columns);
  const selectedColumns = useSelector((store) => store.selectedColumn);
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
  const [lgShow, setLgShow] = useState(false);
  const [value, setValue] = useState();
  const [line, setLine] = useState([]);
  const [tableth, setTableth] = useState();

  const addline = () => {
    let tab = [...line];
    let newObj = {};
    for (let col of value) {
      newObj[col] = null;
    }
    newObj.id = uuidv4();
    tab.push(newObj);

    setLine(tab);
  };


  const onValueChangedT = (key, value) => {
    console.log(`key :${key} value: ${value}`);
  };
  const onValueChangedD = (key, value) => {
    console.log(`key :${key} value: ${value}`);
  };
  const onValueChangedN = (key, value) => {
    console.log(`key :${key} value: ${value}`);
  };
  const createLine = (e, i) => {
    return (
      <>
        <tr>
          {value !== undefined
            ? columns?.map((c, i) => {
                if (value.includes(c.columnName)) {
                  switch (c.columnType) {
                    case "varchar":
                      return (
                        <td key={id} id={"inputext_" + id}>
                          <InputText
                            id={id}
                            OnTextChanged={(v) => {
                              onValueChangedT(id, v);
                            }}
                          />
                        </td>
                      );
                    case "datetime":
                      return (
                        <td key={id} id={"inputDate_" + id}>
                          <Date
                            id={id}
                            OnDateChanged={(v) => {
                              onValueChangedD(id, v);
                            }}
                          />
                        </td>
                      );
                    case "smallint":
                      return (
                        <td key={id} id={"inputNumber_" + id}>
                          <InputNumber
                            id={id}
                            OnNumberChanged={(v) => {
                              onValueChangedN(id, v);
                            }}
                          />
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
          <Task />
          <div id="iconsetting">
            <GoSettings id="svgsetting" />
          </div>
          <div id="buttonchainenumero4">
            <Budget />
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
                <Table striped bordered hover>
                  <thead>
                    <tr onChange={(e) => setTableth(e.target.value)}>
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
                                    <td key={id} id={"inputext_" + id}>
                                      <InputText
                                        id={id}
                                        OnTextChanged={(v) => {
                                          onValueChangedT(id, v);
                                        }}
                                      />
                                    </td>
                                  );
                                case "datetime":
                                  return (
                                    <td key={id} id={"inputDate_" + id}>
                                      <Date
                                        id={id}
                                        OnDateChanged={(v) => {
                                          onValueChangedD(id, v);
                                        }}
                                      />
                                    </td>
                                  );
                                case "smallint":
                                  return (
                                    <td key={id} id={"inputNumber_" + id}>
                                      <InputNumber
                                        id={id}
                                        OnNumberChanged={(v) => {
                                          onValueChangedN(id, v);
                                        }}
                                      />
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
