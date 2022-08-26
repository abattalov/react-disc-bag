const initialState = {
    bags: [],
    loading: true
}



export default function bagReducer(state=initialState,action){
    switch(action.type){
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
};