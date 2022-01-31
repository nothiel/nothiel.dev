import Draggable from 'react-draggable';
import './home.css';
import ASCII from '../Components/ascii';
import CommandLine from '../Components/cmd';
import { useRef, useState } from 'react';




export default function Home() {
    const useFocus = () => {
        const htmlElRef = useRef(null)
        const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}
    
        return [ htmlElRef, setFocus ] 
    }

    let draggableNodeRef = useRef(null)
    const [lines, setLines] = useState([])
    const [inputRef, setInputFocus] = useFocus()
    return (
        <Draggable nodeRef={draggableNodeRef}>
        <div ref={draggableNodeRef} className="base-class" onClick={setInputFocus}>
            <div className="card border border-dark">
                <div className="card-header" onClick={() => console.log(lines)}>
                    nothiel@nothiel:~
                </div>
                <div className="card-body">
                    <ASCII/>
                    { lines.map((value, index) => {return <div className='cmd-output' key={index}>{value}</div>}) }
                    <span className="til">~ &nbsp;</span>
                    <span className="gt">&gt;</span>
                    
                    <CommandLine setLines={setLines} lines={lines} iRef={inputRef}/>
                </div>
            </div>
        </div>
        </Draggable>
    )
}