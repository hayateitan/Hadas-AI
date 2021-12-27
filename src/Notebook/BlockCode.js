import React, { useRef, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "./style.css";
import Editeur from "./Editeur.js";
import Explain from "./Predict.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button, Tooltip, Overlay, Badge } from "react-bootstrap";
import SubjectIcon from "@mui/icons-material/Subject";
import CodeIcon from "@mui/icons-material/Code";
import { v4 as uuidv4 } from "uuid";
import ImageIcon from "@mui/icons-material/Image";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Outpout from "./Outpout";

function BlockCode(props) {
  const [editors, setEditors] = useState([]);
  const [show, setShow] = useState(false);
  const target = useRef(null);

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
      <Button id="Biconhoverlay" ref={target} onClick={() => setShow(!show)}>
        <AddCircleIcon
          id="iconhoverlay"
          ref={target}
          onClick={() => setShow(!show)}
        />
      </Button>

      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props} className="in">
            <div id="B1">
              <Badge onClick={addEditor} bg="none">
                <SubjectIcon id="iconbaroptionchoice" />
                TEXT
              </Badge>
            </div>
            <div id="B2">
              <Badge onClick={addPredict} bg="none">
                <CodeIcon id="iconbaroptionchoice" />
                AI
              </Badge>
            </div>
            <div id="B3">
              <Badge bg="none">
                <ImageIcon id="iconbaroptionchoice" />
                MEDIA
              </Badge>
            </div>
          </Tooltip>
        )}
      </Overlay>

      <div id="divSetDisplaynone">
        <div id="editeur-de-code">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div {...provided.droppableProps} id="divai" ref={provided.innerRef}>
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
