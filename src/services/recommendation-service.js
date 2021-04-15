const BASE_URL="http://webdev-group-sp2101-server.herokuapp.com/"

export const getRecommendedEvents=()=>{
    return(fetch(`${BASE_URL}/events`)
        .then(response=> response.json()));
}

export const getRecommendedEventsOnLocation=(location)=>{
    return(fetch(`${BASE_URL}/events/venue/${location}`)
        .then(response=> response.json()));
}

