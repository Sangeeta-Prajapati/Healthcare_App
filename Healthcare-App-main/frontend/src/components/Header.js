import React, { useContext, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'
import gsap from 'gsap';
import './Header.css';

const Header = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const headerRef = useRef(null);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    useEffect(() => {
        // Slide in header from the top
        gsap.fromTo(
            headerRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
    }, []);

    return (
        <header className="header" ref={headerRef}>
            <div className="logo">Healthcare App</div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li><Link to="/appointment-preview">Appointment Preview</Link></li>
                            <li><Link to="/doctor-selection">Book Doctors</Link></li>
                            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/register">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;