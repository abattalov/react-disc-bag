export const getBags = () => {
    return dispatch => {
        dispatch({type: "LOADING"})
        fetch("http://localhost:3000/bags")
            .then(resp => resp.json())
            .then(bags => dispatch({type: 'GET_BAGS', bags}))
    }
}

export const addBag = (bag) => {

    return dispatch => {
        fetch('http://localhost:3000/bags', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({bag})
        })
            .then(resp => resp.json())
            .then(bag => {
                dispatch({type: "ADD_BAG", bag})
            })

    }
}