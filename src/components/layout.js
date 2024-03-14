import * as React from "react"
import { useState } from "react"

import {
    page,
    contentwrapper,
    navbar,
    navborder,
    button,
    white,
} from '../style/layout.module.css'


const Layout = ({ children }) => {
    const [activeDiv, setActiveDiv] = useState(null);

    const divClick = (divId) => {
        setActiveDiv(divId);
    }

    return (
    <div className={page}>
        <div className={contentwrapper}>
            <div className={navbar}>  
                <div className={navborder}>
                    <div className={`${button} ${activeDiv === 'home' ? white : ''}`} onClick={() => divClick('home')}>
                        <a href="#">Home</a>
                    </div>
                    <div className={`${button} ${activeDiv === 'profile' ? white : ''}`} onClick={() => divClick('profile')}>
                        <a href="#">Profile</a>
                    </div>
                    <div className={`${button} ${activeDiv === 'contact' ? white : ''}`} onClick={() => divClick('contact')}>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>
            {children}
        </div>
        <footer> 

        </footer>
    </div>
  )
}

export default Layout

