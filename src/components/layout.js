import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

import {
    page,
    contentwrapper,
    navbar,
    navborder,
    button,
    white,
    copyright,
    links,
    headerlinks
} from '../style/layout.module.css'


const Layout = ({ children }) => {
    const [activeDiv, setActiveDiv] = useState('');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        const divId = path === '/' ? 'home' : path.split('/')[1];
        setActiveDiv(divId);
    }, [location.pathname]);

    return (
    <div className={page}>
        <div className={contentwrapper}>
            <div className={navbar}>  
                <div className={navborder}>
                    <div className={`${button} ${activeDiv === 'home' ? white : ''}`}>
                        <Link to="/"  className={headerlinks}>Home</Link>
                    </div>
                    <div className={`${button} ${activeDiv === 'profile' ? white : ''}`} >
                        <Link to="/profile"  className={headerlinks}>Profile</Link>
                    </div>
                    <div className={`${button} ${activeDiv === 'contact' ? white : ''}`} >
                        <Link to="/"  className={headerlinks}>Contact</Link>
                    </div>
                </div>
            </div>
            {children}
        </div>
        <footer> 
                <div className={copyright}>© Gordan Morris 2024</div>
                <div className={links}>
                    <div>Twitter</div>
                    <div>Facebook</div>
                    <div>Linkedin</div>
                </div>
        </footer>
    </div>
  )
}

export default Layout

