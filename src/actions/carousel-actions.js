import {getTrendingEvents} from "../services/carousel-services";

export const FIND_TRENDING_EVENTS="FIND_TRENDING_EVENTS";

const findTrending=(dispatch)=>{
    getTrendingEvents()
        .then(events => dispatch({
            type: FIND_TRENDING_EVENTS,
            events:events.events
        }))
}

const carouselActions={findTrending}

export default carouselActions;