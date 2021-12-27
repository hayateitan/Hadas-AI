import React, { useState } from "react";
import { ImTable } from "react-icons/im";
import { Modal, Tabs, Tab } from "react-bootstrap";
import UnitIndex from "./UnitIndex";
import TimeIndex from "./SelectMultiple2";
const TableTiUi = () => {
  const [smShow, setSmShow] = useState(false);
  return (
    <div>
      <ImTable onClick={() => setSmShow(true)} id="icontable" />
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Body>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Unit index" title="Unit index">
              <UnitIndex />
            </Tab>
            <Tab eventKey="Time index" title="Time index">
              <TimeIndex />
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TableTiUi;
