import Draggable from 'react-draggable';
import './home.css';
import ASCII from '../Components/ascii';
import Presentation from '../Components/presentation';
import CommandLine from '../Components/cmd';
import { useRef, useState } from 'react';




export default function Home() {
    let draggableNodeRef = useRef(null)
    const [lines, setLines] = useState([])
    return (
        <>
        <Presentation/>
        <div>
        <Draggable nodeRef={draggableNodeRef}>
        <div ref={draggableNodeRef} className="base-class">
            <div className="card border border-dark">
                <div className="card-header" onClick={() => console.log(lines)}>
                    nothiel@nothiel:~
                </div>
                <div className="card-body">
                    <ASCII/>
                    { lines.map((value, index) => {return <div className='cmd-output' key={index}>{value}</div>}) }
                    <span className="til">~ &nbsp;</span>
                    <span className="gt">&gt;</span>
                    
                    <CommandLine setLines={setLines} lines={lines} />
                </div>
            </div>
        </div>
        </Draggable>
        </div>
        </>
    )
}