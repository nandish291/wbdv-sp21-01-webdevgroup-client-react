const BASEURL="http://localhost:8080"

export const createUser = (user) =>
    fetch(`${BASEURL}/api/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const findUserById = (uid) =>
    fetch(`${BASEURL}/user/${uid}`)
        .then(response => response.json())

const addEventToInterestedForUser = (uid, event) =>
    fetch(`${BASEURL}/user/${uid}/add_interested_event`, {
        method: "PUT",
        body: JSON.stringify(event),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const updateUser = (uid, user) =>
    fetch(`${BASEURL}/user/${uid}/update`, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

 const deleteEventFromInterestedForUser = (uid,eid) =>
    fetch(`${BASEURL}/user/${uid}/delete_interested_event/${eid}`, {
        method: "DELETE"
    })
        .then(response => response.json())


 const addEventToAttendingForUser = (uid, event) =>
    fetch(`${BASEURL}/user/${uid}/add_attended_event`, {
        method: "PUT",
        body: JSON.stringify(event),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const logIn = (user) =>
        fetch(`${BASEURL}/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => response.json()
            )

 export const logOut = () =>
        fetch(`${BASEURL}/api/logout`, {
            method: 'POST',
            credentials: "include",
        })
            .then(response => response.json())



 const deleteEventFromAttendingForUser = (uid,eid) =>
    fetch(`${BASEURL}/user/${uid}/delete_attended_event/${eid}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const checkLoggedIn=()=>
    fetch(`${BASEURL}/currentUser`, {
        method: 'GET',
        credentials: "include"
    }).then(response => response.json())


const api = {
    findUserById,
    addEventToInterestedForUser,
    deleteEventFromInterestedForUser,
    addEventToAttendingForUser,
    deleteEventFromAttendingForUser,
    updateUser,
    createUser,
    logIn,
    logOut,
    checkLoggedIn
};

export default api;