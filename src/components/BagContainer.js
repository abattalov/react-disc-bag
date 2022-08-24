import React from "react";
import {useEffect} from 'react';
import configData from './config.json'


function BagContainer(){

    // useEffect(() => {
        
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': configData.SECRET_API_KEY,
    //             'X-RapidAPI-Host': 'disc-golf-discs.p.rapidapi.com'
    //         }
    //     };
        
    //     fetch('https://disc-golf-discs.p.rapidapi.com/discs?limit=1000', options)
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         .catch(err => console.error(err));

    // }, [])

    return(
        <div>
            <h1>BagContainer</h1>
        </div>
    )
}

export default BagContainer;
