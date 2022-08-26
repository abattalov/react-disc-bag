import React from "react";

function BagForm(){
    return(
        <div>
            <h2>New Bag</h2>
            <form className='bag-form'>
                <input
                    type='text'
                    placeholder='Bag Name'
                    name="bagName"
                    // value=''
                />
                <button>Add Bag</button>
            </form>
        </div>
    )
}

export default BagForm;