import React, {useState} from "react";
import { Table } from "react-bootstrap";
import InputNumber from "./InputNumber";
import InputText from "./InputText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { v4 as uuidv4 } from "uuid";
import Date from "./FilterDate";
import { useDispatch, useSelector } from "react-redux";

const PredictTable = ({selectedColumns, columns}) => {
  const dispatch = useDispatch()
  const rows = useSelector(store => store.predict)

  const addline = () => {
    let tab = [...rows];
    let newObj = {};
    for (let col of selectedColumns) {
      newObj[col] = null;
    }
    newObj.id = uuidv4();
    tab.push(newObj);

    dispatch({type: "SAVE_PROFILES_PREDICTION", payload: tab})
  };

  const onValueChanged = (id, name, val, type) => {
    const row = rows.find(r => r.id === id)
    const i = rows.indexOf(row)
    let newRow = {...row}

    if (newRow !== undefined) {
      newRow[name] = val
    }

    const tab = [...rows.slice(0, i), newRow, ...rows.slice(i+1, rows.length)]
    
    dispatch({type: "SAVE_PROFILES_PREDICTION", payload: tab})
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {selectedColumns?.map((t) => (
              <th key={t}> {t} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((r) => (
            <tr key={"row_"+r.id}>
              {selectedColumns !== undefined
                ? columns?.map((c, i) => {
                    if (selectedColumns.includes(c.columnName)) {
                      console.log(c.columnType)
                      switch (c.columnType) {
                        case "varchar":
                          return (
                            <td key={`col_${i}_`+r.id}>
                              <InputText
                                value={r[c.columnName]}
                                OnTextChanged={(v) => {
                                  onValueChanged(r.id, c.columnName, v, 'text');
                                }}
                              />
                            </td>
                          );
                        case "datetime":
                          return (
                            <td key={`col_${i}_`+r.id}>
                              <Date
                                value={r[c.columnName]}
                                OnDateChanged={(v) => {
                                  onValueChanged(r.id, c.columnName, v, 'date');
                                }}
                              />
                            </td>
                          );
                        case "smallint","float":
                          return (
                            <td key={`col_${i}_`+r.id}>
                              <InputNumber
                               value={r[c.columnName]}
                                OnNumberChanged={(v) => {
                                  onValueChanged(r.id, c.columnName,v, 'number');
                                }}
                              />
                            </td>
                          );
                      }
                    }
                  })
                : ""}
            </tr>
          ))}

          <AddCircleIcon id="iconhoverlaymodal" onClick={addline} />
        </tbody>
      </Table>
    </div>
  );
};

export default PredictTable;
