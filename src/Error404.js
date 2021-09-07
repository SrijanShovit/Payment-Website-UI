import React from 'react'
import {NavLink} from 'react-router-dom'

const Error404 = () => {
    return (
        <div id="notfound">
           <div className="notfound">
               <div className="notfound-404">
                    <h1>404</h1>
               </div>
               <h2>WE ARE SORRY PAGE NOT FOUND</h2>
               <p>THE PAGE YOU ARE LOOKING FOR IS CURRENTLY UNAVAILABLE</p>
               <NavLink to="/">Back to home page</NavLink>
            </div>
            
        </div>
    )
}

export default Error404
