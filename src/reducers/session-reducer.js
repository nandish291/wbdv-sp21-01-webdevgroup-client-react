import {INVALID_USER, SET_USER} from "../actions/user-actions";


const initState={
    user: {},
    invalid: false,
    userLoggedin:false
}

const sessionReducer=(state=initState,action)=>{
    console.log("session reducer called")
    switch (action.type)
    {
        case SET_USER: {
            if(action.responseUser.id!=null)
                return({...state,user: action.responseUser,invalid: false,userLoggedin: true})
            else
                return({...state,user: action.responseUser,invalid: false,userLoggedin: false})
        }
        case INVALID_USER:{
            return ({...state,invalid: true})
        }
        default: return state;
    }
}

export default sessionReducer;