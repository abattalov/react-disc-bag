import React from "react";

function BagForm(){
    return(
        <div>
            <form className='bag-form'>
                <input
                    type='text'
                    placeholder='Bag Name'
                    name="bagName"
                    // value=''
                />
            </form>
        </div>
    )
}

export default BagForm;