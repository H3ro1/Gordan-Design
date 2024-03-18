import * as React from "react"

import {
    
   
    bodywrapper,
    titlediv,
    square,
    squaregridwrapper,
    squaredimage
  
} from "../style/squaregridimage.module.css"

const Squaregridimage = ({ squares, title }) => {
    return (
        <div className={bodywrapper}>
            <div className={titlediv}>{title}</div>
            <div className={squaregridwrapper}>
            {squares.map((item) => (
                <div className={squaredimage}>
                    <img src={item.squareimage} />
                </div>
            ))}
            </div>
        </div>
    );
}

export default Squaregridimage;

