import { getUsers } from "../users"
import { useLoaderData } from "react-router-dom";
export async function loader() {
    const users = await getUsers();
    return { users };
}
export default function Users() {
    const { users } = useLoaderData();

    return (
        <>
            <nav>
                <ul>
                    {users.map(user => <li>{user.username}</li>)}
                </ul>
            </nav>
        </>
    )
}