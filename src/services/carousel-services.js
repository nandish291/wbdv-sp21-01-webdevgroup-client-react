const BASE_URL="https://webdev-group-sp2101-server.herokuapp.com"

export const getTrendingEvents=()=>{
    return(fetch(`${BASE_URL}/events/trending`)
        .then(response=> response.json()));
}

