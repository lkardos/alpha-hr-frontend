import { getUsers } from "../users"
export async function loader() {
    const users = await getUsers();
    return { users };
}
export default function Users() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        user1
                    </li>
                    <li>
                       user2
                    </li>
                </ul>
            </nav>
        </>
    )
}