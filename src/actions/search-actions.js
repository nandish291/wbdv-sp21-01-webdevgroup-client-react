import {getAllEventsByName} from "../services/search-service"

export const FIND_EVENTS_BY_NAME="FIND_EVENTS_BY_NAME"
export const SEARCH_TEXT_UPDATE="SEARCH_TEXT_"

const findEventsByName=(dispatch,name)=>{
    getAllEventsByName(name)
        .then(events=>dispatch({
            type: FIND_EVENTS_BY_NAME,
            events: events.events
            })
        )
}

const searchTextUpdate=(dispatch,text)=>{
    dispatch({
        type: SEARCH_TEXT_UPDATE,
        text
    })
}

const searchActions={findEventsByName,searchTextUpdate}

export default searchActions;