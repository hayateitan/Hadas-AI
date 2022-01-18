import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./outpout.css";
import { ImEyeBlocked } from "react-icons/im";
import { MdBackupTable, MdOutlineAutoGraph } from "react-icons/md";
import data from "./local-json/outpout.json";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from "@mui/x-data-grid";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsTextParagraph } from "react-icons/bs";
import graph from "../assets/graph.jpg";

const Outpout = () => {
  const [outpout, setOutpout] = useState([]);

  useEffect(() => {
    const header = data[0];
    let h = [];
    Object.entries(header).forEach((key, value) => {
      h.push({ field: key[0], width: 140 });
    });

    setOutpout(h);
  }, []);

  const [changeicon, setChangeicont] = useState(false);

  function changestateicontable() {
    setChangeicont(true);
  }

  function changestateicontable2() {
    setChangeicont(false);
  }
  function cache() {
    if (changeicon === true) {
      document.getElementById("buttonshowtablesoutpout").style.display = "none";
      document.getElementById("buttonshowimgoutpout").style.display = "block";
    }
  }

  function cache2() {
    if (changeicon === false) {
      document.getElementById("buttonshowtablesoutpout").style.display =
        "block";
      document.getElementById("buttonshowimgoutpout").style.display = "none";
    }
  }

  function CustomToolbar() {
    return (
      <GridToolbarContainer className={gridClasses.toolbarContainer}>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  const [cacheoutpout, setCacheoutpout] = useState(false);

  function statecachemodaloutpout() {
    if (cacheoutpout === false) {
      setCacheoutpout(true);
    }
    if (cacheoutpout === true) {
      setCacheoutpout(false);
    }
  }
  function cachemodaloutpout() {
    if (cacheoutpout === true) {
      document.getElementById("changeHeightoutpoutblock").style.display =
        "none";
    }
    if (cacheoutpout === false) {
      document.getElementById("changeHeightoutpoutblock").style.display =
        "block";
    }
  }

  useEffect(() => {
    cache();
    cache2();
    cachemodaloutpout();
  });

  return (
    <div id="containeroutpout">
      <div id="containerbaroptionsicon">
        <Button id="buttonseyesshowoutpoutt" onClick={statecachemodaloutpout}>
          <ImEyeBlocked id="eyescachoutpout" />
        </Button>
        <Button id="buttonshowtablesoutpout" onClick={changestateicontable}>
          <MdBackupTable id="tableicon1" />
        </Button>
        {/* <BiExport id="tableicon2" /> */}
        <BsTextParagraph id="tableicon3" />
        <FiMoreHorizontal id="tableicon4" />
        <Button id="buttonshowimgoutpout" onClick={changestateicontable2}>
          <MdOutlineAutoGraph id="tableicon5" />
        </Button>
        {/* <ImTable id="tableicon5" />
        <ImTable id="tableicon6" /> */}
      </div>
      <Modal.Dialog
        size="xl"
        id="changeHeightoutpoutblock"
        scrollable={true}
        aria-labelledby="example-modal-sizes-title-xlg"
        contentClassName="lololala"
      >
        <Modal.Body>
          <div>
            {changeicon ? (
              <img src={graph} style={{ width: 983, height: 335 }} />
            ) : (
              <div style={{ height: 300, width: "100%" }}>
                <DataGrid
                  rows={data}
                  columns={outpout}
                  pageSize={3}
                  rowsPerPageOptions={[5]}
                  components={{
                    Toolbar: CustomToolbar,
                  }}
                />
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Outpout;
