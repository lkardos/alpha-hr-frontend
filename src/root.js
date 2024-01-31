import {Link} from "react-router-dom";
export default function Root() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={`/usermanagement/users`}>User Management</Link>
                    </li>
                    <li>
                        <Link to={`/timesheets`}>Time Sheets</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}