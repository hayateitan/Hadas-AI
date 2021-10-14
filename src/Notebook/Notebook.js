import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont } from '@fortawesome/free-solid-svg-icons'
import { faGlasses } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import Editeur from './Editeur.js'
import Explain from './Predict.js'
import { v4 as uuidv4 } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';







const Notebook = () => {


    let history = useHistory();
    let token = sessionStorage.getItem('jwt');
    if (token === null || token === undefined) {
        history.push("/login");
    }

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

    const [editors, setEditors] = useState([])

    const addEditor = () => {
        console.log("add")
        let newEditors = [...editors, { id: uuidv4(), type: "editor" }]
        setEditors(newEditors)
    }

    const addExplain = () => {
        console.log("add explain")
        let newEditors = [...editors, { id: uuidv4(), type: "explain" }]
        setEditors(newEditors)
    }

    const createEditor = (e) => {
        console.log(e)
        if (e.type === "editor") {
            return <Editeur id={e.id} key={e.id} />
        }
        else {
            return <Explain id={e.id} key={e.id} />
        }
    }

    const logEditor = (e) => {

        if (e.type === "editor") {
            console.log(document.getElementById("mydiv_" + e.id))
        }

    }


    return (
        <PerfectScrollbar>



            <div id="iconPlus1Notebok" onClick={addEditor}>
                <FontAwesomeIcon id="iconplus1" icon={faFont} />

            </div>


            <div id="iconPlus2Notebok"  >

                <FontAwesomeIcon id="iconcode1" icon={faGlasses} onClick={addExplain} />

            </div>


            <div id="iconPlus3Notebok"  >


                <FontAwesomeIcon id="iconplus3" icon={faChartLine} />


            </div>
            {/* 
            <div id="conatinerbuttonSauvegarde">
                <Button>Backup</Button>
            </div> */}



       
                        <div id="divSetDisplaynone" >
                            <div id="editeur-de-code">


                                {editors?.map(e => createEditor(e))}
                                {editors?.map(e => logEditor(e))}

                            </div>


                        </div>
              
        </PerfectScrollbar>
    )
}

export default Notebook



// const finalSpaceNotebook = [
//     {
//         id: 'gary',
//         name: 'Gary Goodspeed',
//         thumb: '/images/gary.png'
//     },
//     {
//         id: 'cato',
//         name: 'Little Cato',
//         thumb: '/images/cato.png'
//     },
//     {
//         id: 'kvn',
//         name: 'KVN',
//         thumb: '/images/kvn.png'
//     },
//     {
//         id: 'mooncake',
//         name: 'Mooncake',
//         thumb: '/images/mooncake.png'
//     },
//     {
//         id: 'quinn',
//         name: 'Quinn Ergon',
//         thumb: '/images/quinn.png'
//     }
// ]

// function App() {
//     const [noteBook, updateNotebook] = useState(finalSpaceNotebook);

//     function handleOnDragEnd(result) {
//         if (!result.destination) return;

//         const items = Array.from(noteBook);
//         const [reorderedItem] = items.splice(result.source.index, 1);
//         items.splice(result.destination.index, 0, reorderedItem);

//         updateNotebook(items);
//     }

//     return (
//         <div className="App">
//             <header className="App-header">
              
//                 <DragDropContext onDragEnd={handleOnDragEnd}>
//                     <Droppable droppableId="notebook">
//                         {(provided) => (
//                             <ul className="notebook" {...provided.droppableProps} ref={provided.innerRef}>
//                                 {noteBook.map(({ id, name, thumb }, index) => {
//                                     return (
//                                         <Draggable key={id} draggableId={id} index={index}>
//                                             {(provided) => (
//                                                 <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                                                     <div className="characters-thumb">
//                                                         <img src={thumb} alt={`${name} Thumb`} />
//                                                     </div>
//                                                     <p>
//                                                         {name}
//                                                     </p>
//                                                 </li>
//                                             )}
//                                         </Draggable>
//                                     );
//                                 })}
//                                 {provided.placeholder}
//                             </ul>
//                         )}
//                     </Droppable>
//                 </DragDropContext>
//             </header>
          
//         </div>
//     );
// }

// export default App;