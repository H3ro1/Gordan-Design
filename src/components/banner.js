import * as React from 'react'

import {
    bannerwrapper,
    headingwrapper,
    bannerlist,
} from "../style/banner.module.css"




const Banner = () => {
    return(
        <div className={bannerwrapper}>
            <div className={headingwrapper}>
                <h1>Bringing the finest of Web Design to our clientele</h1>
            </div>
            <div className={bannerlist}>
                <ul>
                    <li>Expertise</li>
                    <li>Design</li>
                    <li>Product</li>
                    <li>Branding</li>
                </ul>
            </div> 
        </div>
    )
}

export default Banner