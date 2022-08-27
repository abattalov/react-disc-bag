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
        case "GET_BAGS":
            return {
                ...state,
                loading: false,
                bags: action.bags
            }
        case "ADD_BAG":
            return {
                ...state,
                loading: false,
                bags: [...state.bags, action.bag]
            }
        default:
            return state
    }
};