import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Healthcare App</div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li> {/* Use Link instead of anchor tag */}
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/appointment-preview">Appointment Preview</Link></li> {/* Add link to Appointment Preview */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
