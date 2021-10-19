import React, { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { faGlasses } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import Editeur from "./Editeur.js";
import Explain from "./Predict.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

function BlockCode(props) {


  const [editors, setEditors] = useState([]);




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

  const addExplain = () => {
    console.log("add explain");
    let newEditors = [...editors, { id: uuidv4(), type: "explain" }];
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
      <div id="iconPlus1Notebok" onClick={addEditor}>
        <FontAwesomeIcon id="iconplus1" icon={faFont} />
      </div>

      <div id="iconPlus2Notebok">
        <FontAwesomeIcon id="iconcode1" icon={faGlasses} onClick={addExplain} />
      </div>

      <div id="iconPlus3Notebok">
        <FontAwesomeIcon id="iconplus3" icon={faChartLine} />
      </div>
      {/* 
<div id="conatinerbuttonSauvegarde">
    <Button>Backup</Button>
</div> */}

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
