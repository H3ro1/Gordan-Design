import * as React from 'react'
import { useState } from 'react'



import {
    gridbodywrapper,
    imagewrapper,
    
} from "../style/gridbody.module.css"


const Gridbody = ({ images, name}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null); 

    return(
        <div className={gridbodywrapper}>
            {images.map((item, index) => (
                <div onMouseEnter={() => setHoveredIndex(index)} 
                     onMouseLeave={() => setHoveredIndex(null)}
                     key={index}
                     className={imagewrapper}>
                     {/* Conditionally render the name if this image is hovered */}
                     {hoveredIndex === index && (
                        <div style={{ position: 'absolute', color: 'black', zIndex: 1, fontStyle: "Neue Montreal Regular, sans-serif", fontSize: "20px"}}>
                            {item.name}
                        </div>
                    )}
                    <img src={item.image} alt={item.name} style={{ filter: hoveredIndex === index ? 'blur(4px)' : 'none' }}/>
                    </div>
              
            ))}
        </div>
    )
}

export default Gridbody