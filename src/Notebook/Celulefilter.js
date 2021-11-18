import { React, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import BlockFilter from './BlockFilter'
import { UilFocusAdd } from '@iconscout/react-unicons'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import './celulfilter.css'
const Celulefilter = ({tab}) => {
    const [xlgShow, setXlgShow] = useState(false);

    const [filter, setFilter] = useState([])


    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(filter);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setFilter(items);
    }

    const addFilter = () => {
        console.log("add")
        let newFilter = [...filter, { id: uuidv4(), type: "filter" }]
        setFilter(newFilter)
    }


    const createFilter = (e, i) => {
        console.log(e);

        return (

            <BlockFilter tab={tab} id={e.id} key={e.id} />


        );
    };


    return (

        <>

            <Button onClick={() => setXlgShow(true)}>Filter</Button>

            <Modal
                size="xl"
                show={xlgShow}
                onHide={() => setXlgShow(false)}
                aria-labelledby="example-modal-sizes-title-xlg"
                scrollable={true}
                id="heightChange"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-xlg">
                        Filter
                        <UilFocusAdd id="addfilter" onClick={addFilter} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <div id="divSetDisplaynone" >

                        {filter?.map((e, i) => createFilter(e, i))}

                    </div>


                    <Button id="ButtonSaveFilter">Save</Button>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default Celulefilter
