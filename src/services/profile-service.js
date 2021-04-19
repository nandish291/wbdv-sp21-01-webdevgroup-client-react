const PROFILE_URL = "http://webdev-group-sp2101-server.herokuapp.com";

export const findUserById = (uid) =>
    fetch(`${PROFILE_URL}/profile/${uid}`)
        .then(response => response.json())

const api = {
    findUserById
};

export default api;