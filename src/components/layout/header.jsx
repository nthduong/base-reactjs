import "./header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <ul>
            <li>
                <NavLink class="active" to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/users">Users</NavLink>
            </li>
            <li>
                <NavLink to="/book">Book</NavLink>
            </li>

        </ul>
    );
};

export default Header;
