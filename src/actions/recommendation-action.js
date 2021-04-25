import {getRecommendedEvents, getRecommendedEventsOnLocation,getRecommendedByEvent,getRecommendedByPerformer} from "../services/recommendation-service";
import userService from "../services/user-service"

export const FIND_RECOMMENDED_EVENTS="FIND_RECOMMENDED_EVENTS";
export const FIND_RECOMMENDED_EVENTS_ON_LOCATION="FIND_RECOMMENDED_EVENTS_ON_LOCATION";
export const FIND_RECOMMENDED_BY_PERFORMER="FIND_RECOMMENDED_BY_PERFORMER";
export const FIND_RECOMMENDED_BY_EVENT="FIND_RECOMMENDED_BY_EVENT";
export const SET_USER_EVENTS="SET_USER_EVENTS";
export const CLEAR_RECOMMENDATIONS="CLEAR_RECOMMENDATIONS";

const findRecommended=(dispatch)=>{
    getRecommendedEvents()
        .then(events => dispatch({
            type: FIND_RECOMMENDED_EVENTS,
            events:events.events
        }))
}

const findRecommendedonLocation=(dispatch,location)=>{
    getRecommendedEventsOnLocation(location)
        .then(events=>dispatch({
            type:FIND_RECOMMENDED_EVENTS_ON_LOCATION,
            events: events.events
        }))
}

const findRecommendedByPerformer=(dispatch,performerId)=>{
    getRecommendedByPerformer(performerId)
        .then(events=>dispatch({
            type: FIND_RECOMMENDED_BY_PERFORMER,
            events: events.events
        }))
}

const findRecommendedByEvent=(dispatch,eventId)=>{
    getRecommendedByEvent(eventId)
        .then(events=>dispatch({
            type:FIND_RECOMMENDED_BY_EVENT,
            events:events.events
        }))
}

const findEventsforUserId=(dispatch,eventId)=>{

    userService.findEventsForUser(eventId).then(eventIds=>
        dispatch({
            type: SET_USER_EVENTS,
            eventIds
        })
    )
}

const clearRecommendations=(dispatch)=>{
    dispatch({
        type: CLEAR_RECOMMENDATIONS
    })
}

export default {findRecommended,findRecommendedonLocation,findEventsforUserId,findRecommendedByEvent,
    clearRecommendations,findRecommendedByPerformer}
