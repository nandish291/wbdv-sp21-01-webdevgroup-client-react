import{FIND_RECOMMENDED_EVENTS} from "../actions/recommendation-action";

const initialState={
    recommendedEvents:[]
}

const RecommendationReducer=(state=initialState,action)=>{
    switch (action.type){
        case FIND_RECOMMENDED_EVENTS:
            return{
                ...state,
                recommendedEvents: action.events
            }
        default: return state;
    }
}

export default RecommendationReducer;