export const getBags = () => {
    return dispatch => {
        dispatch({type: "LOADING"})
        fetch("http://localhost:3000/bags")
            .then(resp => resp.json())
            .then(bags => dispatch({type: 'GET_BAGS', bags}))
    }
}