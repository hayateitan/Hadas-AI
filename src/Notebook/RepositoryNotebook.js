import React from 'react'
import { UilPen } from '@iconscout/react-unicons'
import { Link } from "react-router-dom";

const RepositoryNotebook = () => {

    return (
        <div id="repository">
            <Link to="/CreateNoteBook"  >
                <button type="button" id="CreateNoteNook">
                    <div>
                        <UilPen id="iconCreateNoteBook" />
                        <p id="PcreateNotebook">
                            Create a notebook
                        </p>
                    </div>
                </button>
            </Link>
        </div>
    )
}

export default RepositoryNotebook
