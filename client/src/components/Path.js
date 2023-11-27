import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai"
import {AiFillDelete} from "react-icons/ai"

const Path = ({text, deletePath}) => {
    return (
        <div className="cu">
            <div className="text">{text}</div>
            <div className="icons">
                <AiFillCheckCircle className='icon'/>
                <AiFillDelete className='icon' onClick={deletePath} />
            </div>
        </div>
    )
}

export default Path