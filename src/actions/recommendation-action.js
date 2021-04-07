import {getRecommendedEvents} from "../services/recommendation-service";

export const FIND_RECOMMENDED_EVENTS="FIND_RECOMMENDED_EVENTS";

const findRecommended=(dispatch)=>{
    console.log("Action called")
    getRecommendedEvents()
        .then(events => dispatch({
            type: FIND_RECOMMENDED_EVENTS,
            events:events.events
        }))
}

const carouselActions={findRecommended}

export default carouselActions;