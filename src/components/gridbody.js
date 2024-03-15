import * as React from 'react'
import { useState } from 'react'

import {
    gridbodywrapper,
    imagewrapper
} from "../style/gridbody.module.css"

const Gridbody = ({ images }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null); 

    return(
        <div className={gridbodywrapper}>
            {images.map((image, index) => (
                <div onMouseEnter={() => setHoveredIndex(index)} 
                     onMouseLeave={() => setHoveredIndex(null)}
                     key={index}
                     className={imagewrapper}>
                    <img src={image} alt={index} style={{ filter: hoveredIndex === index ? 'blur(8px)' : 'none' }}/>
                </div>  
            ))}
        </div>
    )
}

export default Gridbody