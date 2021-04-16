const EVENT_URL = "https://webdev-group-sp2101-server.herokuapp.com";

export const findUserById = (uid) =>
    fetch(`${EVENT_URL}/user/${uid}`)
        .then(response => response.json())

export const addEventToInterestedForUser = (uid, event) =>
    fetch(`${EVENT_URL}/user/${uid}/add_interested_event`, {
        method: "PUT",
        body: JSON.stringify(event),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteEventFromInterestedForUser = (uid,eid) =>
    fetch(`${EVENT_URL}/user/${uid}/delete_interested_event/${eid}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const addEventToAttendingForUser = (uid, event) =>
    fetch(`${EVENT_URL}/user/${uid}/add_attended_event`, {
        method: "PUT",
        body: JSON.stringify(event),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteEventFromAttendingForUser = (uid,eid) =>
    fetch(`${EVENT_URL}/user/${uid}/delete_attended_event/${eid}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    findUserById,
    addEventToInterestedForUser,
    deleteEventFromInterestedForUser,
    addEventToAttendingForUser,
    deleteEventFromAttendingForUser
};

export default api;