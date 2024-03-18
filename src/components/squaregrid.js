import * as React from "react"

import {
    
   
    bodywrapper,
    titlediv,
    square,
    squaretitle,
    squaresubtitle,
    squareundertitle,
    squaregridwrapper,
  
} from "../style/squaregrid.module.css"

const Squaregrid = ({ squares, title }) => {
    return (
        <div className={bodywrapper}>
            <div className={titlediv}>{title}</div>
            <div className={squaregridwrapper}>
            {squares.map((item) => (
                <div className={square}>
                    <div className={squaretitle}> {item.squaretitle} </div>
                    <div className={squaresubtitle}> {item.squaresubtitle} </div>
                    <div className={squareundertitle}> {item.squareundertitle}</div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Squaregrid;

