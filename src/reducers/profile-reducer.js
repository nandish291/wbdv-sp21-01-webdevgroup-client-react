import React, {useState} from 'react'


const initialState = {
    user:[]

}

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_USER_BY_ID":
            return {
                ...state,
                user: action.event
            }
        default:
            return state
    }
}
export default profileReducer