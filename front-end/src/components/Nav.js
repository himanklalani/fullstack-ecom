import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    };

    return (
        <div>
            <img className="logo" src="/img/blue logo.png" alt="logo" />

            {auth ? (
                <ul className="nav-ul">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "active" : "")}
                            end
                        >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/add"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Add Products
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/update" className={({ isActive }) => (isActive ? "active" : "")}>
                            Update Products
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink
                            to="/categories"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Category of products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/signup"
                            onClick={logout}
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Logout ({JSON.parse(auth).name})
                        </NavLink>
                    </li>
                </ul>
            ) : (
                <ul className="nav-ul nav-right">
                    <li>
                        <NavLink
                            to="/signup"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Sign Up
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Nav;
