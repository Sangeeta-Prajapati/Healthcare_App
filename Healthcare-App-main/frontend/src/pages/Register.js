import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            await axios.post('http://localhost:5000/api/auth/register', {
                name,
                email,
                password,
                phone,
            });

            setMessage('An OTP has been sent to your email successfully! Please verify.');
            setTimeout(() => {
                navigate('/verify-otp', { state: { email } });
            }, 2000);
        } catch (error) {
            setMessage(error.response?.data?.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#001f3f',
                color: '#ffffff',
                padding: '20px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                    backgroundColor: '#003366',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    width: '100%',
                    maxWidth: '500px',
                }}
            >
                <h2
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: '20px',
                        textAlign: 'center',
                        color: '#fff',
                    }}
                >
                    Register
                </h2>
                <form
                    onSubmit={handleRegister}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                        width: '100%',
                    }}
                >
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={inputStyle}
                    />
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
                    <input
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={inputStyle}
                    />
                    <button
                        type="submit"
                        style={buttonStyle}
                    >
                        Register
                    </button>
                </form>

                {message && (
                    <p style={{ marginTop: '20px', color: '#ffcc00', textAlign: 'center' }}>{message}</p>
                )}
            </motion.div>
        </motion.div>
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

export default Register;
