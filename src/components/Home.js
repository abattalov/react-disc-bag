import React from 'react'
import { Link } from 'react-router-dom';

function Home(){

    return(
        <div className="home-page">
            <h1>HOME PAGE</h1>
            <Link to="/bags/new"><button className="create-bag-btn">Create Bag</button></Link>
        </div>
    )
}

export default Home;