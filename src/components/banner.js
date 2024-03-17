import * as React from 'react'

import {
    bannerwrapper,
    headingwrapper,
    bannerlist,
} from "../style/banner.module.css"




const Banner = ({Heading , Bannerlist}) => {
    return(
        <div className={bannerwrapper}>
            <div className={headingwrapper}>
                <h1>{Heading}</h1>
            </div>
            {Bannerlist}
        </div>
    )
}

export default Banner