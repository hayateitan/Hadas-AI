import React, { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "./style.css";
import Editeur from "./Editeur.js";
import Explain from "./Predict.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button, Popover, OverlayTrigger } from 'react-bootstrap'
import { UilPlusCircle } from '@iconscout/react-unicons'

import { v4 as uuidv4 } from "uuid";

function BlockCode(props) {


  const [editors, setEditors] = useState([]);


  useEffect(() => {
    timer = setTimeout(onMouseOver, 3000);
  }, [])


  function onMouseOver() {
    document.getElementById("iconhoverlay").style.width = "30px"
  }

  function changeWidth() {
    clearTimeout(timer)
    document.getElementById("iconhoverlay").style.width = "40px"
    timer = setTimeout(onMouseOver, 3000);
  }

  let timer

  const renderTooltip = (props) => (
    <Popover  {...props}>
      <Popover.Body>
        <div id="iconPlus1Notebok" >
          <p id="iconplus1" onClick={addEditor}>Editor</p>
        </div>

        <div id="iconPlus2Notebok" >
          <p id="iconcode1" onClick={addPredict}>Predict</p>
        </div>

        <div id="iconPlus3Notebok">
          <p id="iconplus3">Explain</p>
        </div>
      </Popover.Body>
    </Popover>
  );

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(editors);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setEditors(items);
  }

  const addEditor = () => {
    console.log("add");
    let newEditors = [...editors, { id: uuidv4(), type: "editor" }];
    setEditors(newEditors);
  };

  const addPredict = () => {
    console.log("add predict");
    let newEditors = [...editors, { id: uuidv4(), type: "predict" }];
    setEditors(newEditors);
  };

  const createEditor = (e, i) => {
    console.log(e);
    return (
      <Draggable key={e.id} draggableId={e.id} index={i}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {e.type === "editor" ? (
              <Editeur id={e.id} key={e.id} />
            ) : (
              <Explain id={e.id} key={e.id} />
            )}
          </div>
        )}
      </Draggable>
    );
  };

  const logEditor = (e) => {
    if (e.type === "editor") {
      console.log(document.getElementById("mydiv_" + e.id));
    }
  };
  return (
    <PerfectScrollbar>

      <div>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 3000 }}
          overlay={renderTooltip}
        >
          {/* <UilPlusCircle id="button-tooltip" type="button"></UilPlusCircle> */}
          <Button variant="success" id="button-tooltip"  > <UilPlusCircle id="iconhoverlay" onMouseOver={changeWidth} /></Button>
        </OverlayTrigger>
      </div>

      <div id="divSetDisplaynone">
        <div id="editeur-de-code">
          <DragDropContext onDragEnd={handleOnDragEnd} >
            <Droppable droppableId="droppable">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {editors?.map((e, i) => createEditor(e, i))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          {editors?.map((e) => logEditor(e))}
        </div>
      </div>
    </PerfectScrollbar>
  );
}

export default BlockCode;
