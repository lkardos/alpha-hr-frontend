// TODO: API server needs to be dynamically configurable, now like this for start of development
const USER_API = "http://localhost:8080";
export async function getUsers() {
    // TODO: API server needs to be configurable, now like this for start of development

    const response = await fetch(USER_API);
    const users = await response.json();

    return users
}