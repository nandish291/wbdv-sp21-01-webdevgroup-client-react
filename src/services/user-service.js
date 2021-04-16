export const createUser = (user) =>
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
        fetch(`http://localhost:8080/api/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())



// export const findUserById = (uid) =>
//     fetch(`http://localhost:8080/api/profile/${uid}`)
//         .then(response => response.json())

export default {
    createUser,
    logIn
}