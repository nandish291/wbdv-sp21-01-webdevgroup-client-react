const BASE_URL="http://localhost:8080"

export const getTrendingEvents=()=>{
    return(fetch(`${BASE_URL}/events/trending`)
        .then(response=> response.json()));
}

