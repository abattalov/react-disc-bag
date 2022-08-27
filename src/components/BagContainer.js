import React from "react";
// import configData from './config.json'
import Bag from './Bag'
import { connect } from "react-redux";


function BagContainer(props){

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

    const bags = props.bags.map((bag) => <Bag key={bag.id} id={bag.id} name={bag.name}/>)

    return(
        <div>
            <h1>BagContainer</h1>
            {bags}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        bags: state.bags
    }
}

export default connect(mapStateToProps)(BagContainer);
