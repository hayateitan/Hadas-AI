import React from "react";
import { Table } from "react-bootstrap";
import InputNumber from "./InputNumber";
import InputText from "./InputText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Date from "./FilterDate";

const PredictTable = (props) => {
  const [rows, setRows] = useState([]);

  const addline = () => {
    let tab = [...rows];
    let newObj = {};
    for (let col of value) {
      newObj[col] = null;
    }
    newObj.id = uuidv4();
    tab.push(newObj);

    setRows(tab);
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {props.selectedColumns?.map((t) => (
              <th key={t}> {t} </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.maps((r) => (
            <tr>
              {props.selectedColumns !== undefined
                ? props.columns?.map((c, i) => {
                    console.log("id = " + i);
                    console.log("selected = " + value);
                    console.log(c);
                    if (props.selectedColumns.includes(c.columnName)) {
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
          ))}

          <AddCircleIcon id="iconhoverlaymodal" onClick={addline} />
        </tbody>
      </Table>
    </div>
  );
};

export default PredictTable;
