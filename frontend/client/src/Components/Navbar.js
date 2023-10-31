import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import 'Components/css/Navbar.css';

const Navbar = () => {
    const { isAuthenticated } = useSelector(state => state.user);

    const authLinks = (
        <>
            <NavLink className="nav-p-bg" to="/dashboard">
                Dashboard
            </NavLink>
            <a href='#!' className="nav-p-bg">Logout</a>
        </>
    )

    const guestLinks = (
        <div className="auth-links">
            <NavLink className="nav-p-bg" to="/register">
                Register
            </NavLink>
            <NavLink className="nav-p-bg" to="/login">
                Login
            </NavLink>
        </div>
    )

    return (
        <div className="nav-wrapper">
            <Link className="nav-p-bg" to="/">
                Auth Site
            </Link>
            {isAuthenticated ? authLinks : guestLinks}
        </div>
    );
}

export default Navbar;