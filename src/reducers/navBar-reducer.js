import {GET_LOCATION} from "../actions/navBar-actions";

const initialState={
    location:""
}


const navBarReducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_LOCATION:
            return(
        {
        ...state,
        location: action.location
        }
            )
        default: return state;
    }
}

export default navBarReducer;