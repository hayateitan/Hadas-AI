import { React, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import BlockFilter from './BlockFilter'
import PerfectScrollbar from 'react-perfect-scrollbar'

const Celulefilter = () => {
    const [xlgShow, setXlgShow] = useState(false);


    const [filter, setFilter] = useState([])

    const addFilter = () => {
        console.log("add")
        let newFilter = [...filter, { id: uuidv4(), type: "filter" }]
        setFilter(newFilter)
    }

    const createFilter = (e) => {
        console.log(e)
        if (e.type === "filter") {
            return <BlockFilter id={e.id} key={e.id} />
        }

    }

    return (

        <>

            <Button onClick={() => setXlgShow(true)}>Filter</Button>

            <Modal
                size="xl"
                show={xlgShow}
                onHide={() => setXlgShow(false)}
                aria-labelledby="example-modal-sizes-title-xlg"
                scrollable={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-xlg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button onClick={addFilter}>ss</Button>
                  

                        <div id="divSetDisplaynone" >
                       
                                {filter?.map(e => createFilter(e))}

                         


                        </div>
                 

                    <Button id="ButtonSaveFilter">Save</Button>
                </Modal.Body>
            </Modal>
        </>
    );
}


export default Celulefilter
