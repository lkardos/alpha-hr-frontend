// TODO: API server needs to be dynamically configurable, now like this for start of development
const USER_API = "http://user-management-service";
const ADD_USER_ENDPOINT = "/add"
export async function getUsers() {
    // TODO: API server needs to be configurable, now like this for start of development

    const response = await fetch(USER_API);
    const users = await response.json();

    return users
}

export async function addUser(userData) {
    await fetch(USER_API + ADD_USER_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    });
}
