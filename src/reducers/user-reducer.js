import {SET_USER_DETAILS} from "../actions/user-actions";

const initialState = {
    user: [],
    userDetails:{}
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_USER_BY_ID":
        case "ADD_EVENT_TO_INTERESTED_FOR_USER":
        case "DELETE_EVENT_FROM_INTERESTED_FOR_USER":
        case "ADD_EVENT_TO_ATTENDING_FOR_USER":
        case "DELETE_EVENT_FROM_ATTENDING_FOR_USER":
            return {
                ...state,
                user: action.user
            }
        case SET_USER_DETAILS:{
            return ({
                ...state,
                userDetails: action.userDetails
            })
        }
        default:
            return state
    }
}
export default userReducer