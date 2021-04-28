const BASE_URL="https://webdev-group-sp2101-server.herokuapp.com"

export const getRecommendedEvents=()=>{
    return(fetch(`${BASE_URL}/events`)
        .then(response=> response.json()));
}

export const getRecommendedEventsOnLocation=(location)=>{
    return(fetch(`${BASE_URL}/events/venue/${location}`)
        .then(response=> response.json()));
}

export const getRecommendedByPerformer=(id)=>{
    return(fetch(`${BASE_URL}/recommendations/performer/${id}`))
        .then(response=>response.json())
}

export const getRecommendedByEvent=(id)=>{
    return(fetch(`${BASE_URL}/recommendations/event/${id}`))
        .then(response=>response.json())
}

