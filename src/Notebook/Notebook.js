import React, { useEffect, useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useDispatch } from "react-redux";
import { test } from "../actions/testaction";
import BlockCode from "./BlockCode";
// import { Button } from 'react-bootstrap';

const Notebook = () => {
  const dispath = useDispatch();

  const [zones, setZones] = useState([{ id: uuidv4() }, { id: uuidv4() }]);

  /*let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }*/

  /*useEffect(() => {
    dispath(test("eitan"));
  }, []);*/

  // useEffect(() => {
  //     timer = setTimeout(mafonction, 3000);
  // }, [])

  // function mafonction() {
  //     document.getElementById("editeur-de-code").style.visibility = "hidden"
  // }

  // function onMouseOver() {
  //     clearTimeout(timer)
  //     document.getElementById("editeur-de-code").style.visibility = "visible"
  //     timer = setTimeout(mafonction, 3000);
  // }

  // let timer

  return (
    <DragDropContext>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {zones.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <BlockCode />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Notebook;
