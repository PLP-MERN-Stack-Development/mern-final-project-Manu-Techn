import React, { useState } from 'react';
import LoginModal from './LoginModal';
import './Header.css';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [modalType, setModalType] = useState('login');

    const handleLogin = (userData) => {
        setUser(userData);
        setIsModalOpen(false);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <span className="logo-icon">🌟</span>
                    MIND EASE
                </div>
                <nav className="nav">
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#about">About</a>
                    
                    {user ? (
                        <span>Welcome, {user.username}!</span>
                    ) : (
                        <>
                            <button 
                                className="login-btn" 
                                onClick={() => {
                                    setModalType('login');
                                    setIsModalOpen(true);
                                }}
                            >
                                Login
                            </button>
                            <button 
                                className="signup-btn" 
                                onClick={() => {
                                    setModalType('register');
                                    setIsModalOpen(true);
                                }}
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </nav>
            </div>
            
            <LoginModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onLogin={handleLogin}
                initialType={modalType}
            />
        </header>
    );
};

export default Header;