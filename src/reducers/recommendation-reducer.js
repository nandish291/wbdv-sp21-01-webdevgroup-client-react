import {
    CLEAR_RECOMMENDATIONS,
    FIND_RECOMMENDED_BY_EVENT,
    FIND_RECOMMENDED_BY_PERFORMER,
    FIND_RECOMMENDED_EVENTS,
    FIND_RECOMMENDED_EVENTS_ON_LOCATION, SET_USER_EVENTS
} from "../actions/recommendation-action";

const initialState={
    recommendedEvents:[],
    events:[],
    eventsByPerformer:[],
    eventsByEvent:[],
    eventIds:{}
}

const RecommendationReducer=(state=initialState,action)=>{
    switch (action.type){
        case FIND_RECOMMENDED_EVENTS:
            return{
                ...state,
                events: action.events
            }
        case FIND_RECOMMENDED_EVENTS_ON_LOCATION:
            return {
                ...state,
                recommendedEvents: action.events
            }
        case FIND_RECOMMENDED_BY_PERFORMER:
            return {
                ...state,
                eventsByPerformer: action.events
            }
        case FIND_RECOMMENDED_BY_EVENT:
            return {
                ...state,
                eventsByEvent: action.events
            }
        case SET_USER_EVENTS:
            return {
                ...state,
                eventIds: action.eventIds
            }
        case CLEAR_RECOMMENDATIONS:
            return {
                ...state,
                eventIds: initialState.eventIds,
                eventsByEvent: initialState.eventsByEvent,
                eventsByPerformer: initialState.eventsByPerformer
            }
        default: return state;
    }
}

export default RecommendationReducer;