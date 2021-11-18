import React from 'react'
import ChoiceBuisnessDomain from './ChoiceBuisnessDomain'
import ChoiceLibrary from './ChoiceLibrary'
import TagsBar from './TagsBar'
import TeamSharing from './TeamSharing'
import AdvancedMode from './AdvancedMode'
import PerfectScrollbar from "react-perfect-scrollbar";
import AlgoOption from './AlgoOption'
import { Button } from 'react-bootstrap'
import './CreateNotebook.css'
import { Link } from "react-router-dom";
const CreateNotebook = () => {
    const selectedTags = tags => {
        console.log(tags);
    };
    return (
        <div >
            <PerfectScrollbar>

                {/* <ChoiceBuisnessDomain /> */}
                <ChoiceLibrary />
                <TagsBar selectedTags={selectedTags} tags={[]} />
                {/* <TeamSharing /> */}
                {/* <div id="ContainerAA">
                    <AdvancedMode />
                    <AlgoOption />
                </div> */}
                <Link to="/Predict"  >
                    <Button id="ButonnNext" >Next</Button>
                </Link>

            </PerfectScrollbar>

        </div>
    )
}

export default CreateNotebook
