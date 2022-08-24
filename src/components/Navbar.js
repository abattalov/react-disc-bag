import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav>
            <h1 className='nav-title'>My Disc Bag</h1>
            <Link to='/discs'><button className='nav-button'>Discs</button></Link>
        </nav>
    )
}