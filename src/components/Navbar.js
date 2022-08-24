import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav>
            <h1 className='nav-title'>My Disc Bag</h1>
            <Link to='/'><button className='nav-button'>Home</button></Link>
            <Link to='/discs'><button className='nav-button'>Discs</button></Link>
            <Link to='/bags'><button className='nav-button'>Bags</button></Link>
        </nav>
    )
}