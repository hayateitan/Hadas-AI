import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Table } from "react-bootstrap";
import "./outpout.css";
import { ImEyeBlocked } from "react-icons/im";
import { ImTable } from "react-icons/im";
import axios from "axios";
import data from "./local-json/outpout.json";
import { DataGrid } from '@mui/x-data-grid';
const Outpout = () => {
  const dispatch = useDispatch();

  const [outpout, setOutpout] = useState([]);
  // const outpout = useSelector((store) => store.outpout);
  // useEffect(() => {
  //   getAllOutpout();
  // }, []);

  // const getAllOutpout = async () => {
  //   const res = await axios.get(`${data}`);

  //   dispatch({ type: "LOAD_OUTPOUT", payload: res.data });
  // };



  const columns = [
    
  { field: 'id', headerName: 'ID', width: 70 },
  
    { field: 'lastName', width: 150 },

  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', age: 35 },
    { id: 2, lastName: 'Lannister', age: 42 },
  ];


  useEffect(() => {
    const header = data[0];
    let h = [];
    Object.entries(header).forEach((key, value) => {
      h.push(key[0]);
    });

    setOutpout(h);
  }, []);

  return (
    <div id="containeroutpout">
      <div id="containerbaroptionsicon">
        <ImEyeBlocked id="eyescachoutpout" />
        <ImTable id="tableicon1" />
        <ImTable id="tableicon2" />
        <ImTable id="tableicon3" />
        <ImTable id="tableicon4" />
        <ImTable id="tableicon5" />
        <ImTable id="tableicon6" />
      </div>
      <Modal.Dialog
        size="xl"
        id="changeHeightoutpoutblock"
        scrollable={true}
        aria-labelledby="example-modal-sizes-title-xlg"
        contentClassName="lololala"
      >
        <Modal.Body>
          {/* <Table striped bordered hover>
            <thead>
              <tr>
                {outpout?.map((t) => (
                  <th > {t} </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map(r => <tr>{ outpout?.map(c => <td>{r[c]}</td>) }</tr>)}
            </tbody>
          </Table> */}
          <div style={{ height: 200, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Outpout;
