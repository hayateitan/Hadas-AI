import React from "react";
import ChoiceLibrary from "./ChoiceLibrary";
import TagsBar from "./TagsBar";
import "./CreateNotebook.css";
import { Link } from "react-router-dom";
import AccesNotebook from "./AccesNotebook";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Formtitle from "./FormtitleCreateNotebook";

const CreateNotebook = () => {
  const selectedTags = (tags) => {
    console.log(tags);
  };

  return (
    <div>
      <h1 id="createnotebook">Create Notebook</h1>
      <div id="containercreatenotebook">
        <ChoiceLibrary />
        <Formtitle />
        <TagsBar selectedTags={selectedTags} tags={[]} />

        <AccesNotebook />
        <Link to="/Predict" id="liensiconnext">
          <HiOutlineArrowNarrowRight id="flechenext" />
          <p id="addtolibraryptexticonfleche">Next</p>
        </Link>
      </div>
    </div>
  );
};

export default CreateNotebook;
