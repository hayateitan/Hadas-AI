import React, { useEffect, useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import BlockCode from "./BlockCode";
import RepositoryNotebook from './RepositoryNotebook'
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
    // <BlockCode />
    <RepositoryNotebook />
  );
};

export default Notebook;
