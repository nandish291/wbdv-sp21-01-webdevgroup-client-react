const EVENTS_URL = "https://webdev-group-sp2101-server.herokuapp.com/"

export const findEventByTitle = (name) =>
    fetch(`${EVENTS_URL}/search?name=${name}`)
        .then(response => response.json())

export const findEventByArtist = (performerName) =>
    fetch(`${EVENTS_URL}/search?performerName=${performerName}`)
        .then(response => response.json())

// export const findEventById = (id) =>
//     fetch(`${EVENTS_URL}/search?id=${id}`)
//         .then(response => response.json())

const eventService = {
    findEventByTitle,
    findEventByArtist
}

export default eventService
// findEventById