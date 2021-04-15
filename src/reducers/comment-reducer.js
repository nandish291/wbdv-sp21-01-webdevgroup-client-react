
const initialState = {
    comments: []
}

const commentReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_COMMENTS_FOR_EVENT":
            return {
                ...state,
                comments: action.comments
            }

        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(m => {
                    if(m._id === action.topic._id) {
                        return action.topic
                    } else {
                        return m
                    }
                })
            }
        default:
            return state
    }
}
export default commentReducer