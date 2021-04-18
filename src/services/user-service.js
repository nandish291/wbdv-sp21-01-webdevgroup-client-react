export const createUser = (user) =>
    // fetch(`http://webdev-group-sp2101-server.herokuapp.com/api/register/${user.username}`, {
    fetch(`http://localhost:8080/api/register/${user.username}`, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const logIn = (user) =>
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

export const logOut = () =>
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

export default {
    createUser,
    logIn,
    logOut
}