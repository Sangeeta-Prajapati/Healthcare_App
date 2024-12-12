import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { AuthContext } from '../components/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const containerRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );

        gsap.fromTo(
            headingRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, delay: 0.5, ease: 'power3.out' }
        );
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });
            console.log(response.data);
            const { token } = response.data;
            login(token);  // Update global authentication state

            navigate('/doctor-selection');
        } catch (error) {
            console.error('Login failed:', error.message);
            setMessage('Login failed. Please check your credentials and try again.');
        }
    };

    // const handleForgotPassword = () => {
    //     console.log('Forgot Password clicked');
    // };

    return (
        <div
            ref={containerRef}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#001f3f',
                color: '#ffffff',
                padding: '20px',
            }}
        >
            <h2
                ref={headingRef}
                style={{
                    fontSize: '2.5rem',
                    marginBottom: '20px',
                    color: "#fff"
                }}
            >
                Login
            </h2>
            <form
                onSubmit={handleLogin}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={inputStyle}
                />
                <button
                    type="submit"
                    style={buttonStyle}
                >
                    Login
                </button>
            </form>
            {message && <p style={{ marginTop: '20px', color: '#ffcc00' }}>{message}</p>}
            <button
                onClick={() => navigate('/forgot-password')}
                
                style={{
                    ...buttonStyle,
                    backgroundColor: 'transparent',
                    border: '1px solid #007bff',
                    color: '#007bff',
                    marginTop: '15px',
                }}
            >
                Forgot Password?
            </button>
        </div>
    );
};

const inputStyle = {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
};

const buttonStyle = {
    padding: '10px 15px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

buttonStyle[":hover"] = {
    backgroundColor: '#0056b3',
};

export default Login;
