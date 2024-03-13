import * as React from "react"

import {
    page,
    contentwrapper,
    navbar,
    navborder,
    button,
} from '../style/layout.module.css'


const Layout = ({ children }) => {
  return (
    <div className={page}>
        <div className={contentwrapper}>
            <div className={navbar}>  
                <div className={navborder}>
                    <div className={button}>
                        <a href="#">Home</a>
                    </div>
                    <div className={button}>
                        <a href="#">Profile</a>
                    </div>
                    <div className={button}>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>
        <main>
            {children}
        </main>
        </div>
        <footer> 

        </footer>
    </div>
  )
}

export default Layout

