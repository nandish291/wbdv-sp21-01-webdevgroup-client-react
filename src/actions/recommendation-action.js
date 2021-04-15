import {getRecommendedEvents, getRecommendedEventsOnLocation} from "../services/recommendation-service";

export const FIND_RECOMMENDED_EVENTS="FIND_RECOMMENDED_EVENTS";
export const FIND_RECOMMENDED_EVENTS_ON_LOCATION="FIND_RECOMMENDED_EVENTS_ON_LOCATION";

const findRecommended=(dispatch)=>{
    getRecommendedEvents()
        .then(events => dispatch({
            type: FIND_RECOMMENDED_EVENTS,
            events:events.events
        }))
}

const findRecommendedonLocation=(dispatch,location)=>{
    console.log("location events called")
    getRecommendedEventsOnLocation(location)
        .then(events=>dispatch({
            type:FIND_RECOMMENDED_EVENTS_ON_LOCATION,
            events: events.events
        }))
}

const carouselActions={findRecommended,findRecommendedonLocation}

export default carouselActions;