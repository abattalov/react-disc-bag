import React, {useState} from "react";
import {connect} from 'react-redux';
import { addBag } from "../actions";

function BagForm(props){

    const [state, setState] = React.useState({
        name: ''
    })

    const handleChange = (e) => {
        setState({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.addBag(state)
    }

    return(
        <div>
            <h2>New Bag</h2>
            <form className='bag-form' onSubmit={handleSubmit}>
                <label htmlFor="bagName">Bag Name</label>
                <input
                    type='text'
                    placeholder='Bag Name'
                    id="bagName"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                />
                <button>Add Bag</button>
            </form>
        </div>
    )
}

export default connect(null,{addBag})(BagForm);