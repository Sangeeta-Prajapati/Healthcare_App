import React, { useEffect, useRef } from 'react';
import SearchBar from '../components/Searchbar';
import { gsap } from 'gsap';

const Home = () => {
    // Refs for motion
    const heroRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            heroRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
            .fromTo(
                headingRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
                "-=0.5"
            )
            .fromTo(
                paragraphRef.current,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
                "-=0.5"
            );
    }, []);

    const handleSearch = (query) => {
        console.log('Searching for:', query);
        // Implement search functionality (e.g., filter doctors or hospitals)
    };

    return (
        <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'darkblue',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div
                ref={heroRef}
                style={{
                    backgroundColor: '#ffffff',
                    padding: '50px 30px',
                    borderRadius: '12px',
                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                    width: '80%',
                    maxWidth: '600px',
                    transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
                <h1
                    ref={headingRef}
                    style={{
                        fontSize: '2.5rem',
                        color: '#007bff',
                        marginBottom: '20px',
                        animation: 'fadeIn 1s ease-in-out',
                    }}
                >
                    Welcome to the Healthcare App
                </h1>
                <p
                    ref={paragraphRef}
                    style={{
                        fontSize: '1.2rem',
                        color: '#555555',
                        marginBottom: '30px',
                        lineHeight: '1.6',
                        animation: 'fadeIn 1s ease-in-out',
                    }}
                >
                    Find the best doctors, hospitals, and healthcare services near you.
                </p>
                <SearchBar onSearch={handleSearch} />
            </div>
        </div>
    );
};

export default Home;
