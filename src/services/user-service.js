const createUser = (user) =>
    // fetch(`http://webdev-group-sp2101-server.herokuapp.com/api/register/${user.username}`, {
    fetch(`http://localhost:8080/api/register/${user.username}`, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: "include",
const EVENT_URL = "https://webdev-group-sp2101-server.herokuapp.com";

const findUserById = (uid) =>
    fetch(`${EVENT_URL}/user/${uid}`)
        .then(response => response.json())

const addEventToInterestedForUser = (uid, event) =>
    fetch(`${EVENT_URL}/user/${uid}/add_interested_event`, {
        method: "PUT",
        body: JSON.stringify(event),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

 const deleteEventFromInterestedForUser = (uid,eid) =>
    fetch(`${EVENT_URL}/user/${uid}/delete_interested_event/${eid}`, {
        method: "DELETE"
    })
        .then(response => response.json())


 const addEventToAttendingForUser = (uid, event) =>
    fetch(`${EVENT_URL}/user/${uid}/add_attended_event`, {
        method: "PUT",
        body: JSON.stringify(event),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


 const logIn = (user) =>
        // fetch(`http://webdev-group-sp2101-server.herokuapp.com/api/login`, {
        fetch(`http://localhost:8080/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())

 const logOut = () =>
        // fetch(`http://webdev-group-sp2101-server.herokuapp.com/api/logout`, {
        fetch(`http://localhost:8080/api/logout`, {
            method: 'POST',
            credentials: "include",
            // headers: {
            //     'content-type': 'application/json'
            // }
        })
            .then(response => response.json())



// export const findUserById = (uid) =>
//     fetch(`http://localhost:8080/api/profile/${uid}`)
//         .then(response => response.json())
 const deleteEventFromAttendingForUser = (uid,eid) =>
    fetch(`${EVENT_URL}/user/${uid}/delete_attended_event/${eid}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    findUserById,
    addEventToInterestedForUser,
    deleteEventFromInterestedForUser,
    addEventToAttendingForUser,
    deleteEventFromAttendingForUser,
    createUser,
    logIn,
    logOut
};

export default api;
