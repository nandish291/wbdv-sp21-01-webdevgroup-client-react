export const createUser = (name, username, password, email) =>
    fetch(`http://localhost:8080/api/register/${name}/${username}/${password}/${email}`, {
        method: 'POST',
        body: JSON.stringify(
            {
                name: name,
                username: username,
                password: password,
                email: email
            }),
        // credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const logIn = (username, password) =>
    fetch(`http://localhost:8080/api/login/${username}/${password}`)
        .then(response => response.json())
        // .then(response => console.log(response))


// export const findUserById = (uid) =>
//     fetch(`http://localhost:8080/api/profile/${uid}`)
//         .then(response => response.json())

export default {
    createUser,
    logIn
}