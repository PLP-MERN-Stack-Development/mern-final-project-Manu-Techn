import React, { useState, useEffect } from 'react';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose, onLogin, initialType = 'login' }) => {
    const [isLogin, setIsLogin] = useState(initialType === 'login');
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    useEffect(() => {
        setIsLogin(initialType === 'login');
        setFormData({ username: '', email: '', password: '' });
    }, [initialType, isOpen]);

    if(!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form successfully submitted:', formData);
        onLogin({ username: formData.username || formData.email });
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>x</button>
                <h2>{isLogin ? 'Login' : 'Register'}</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input type="text" placeholder="Choose a username" value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                        />
                    )}
                    <input type="email" placeholder="Enter your email" value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <input type="password" placeholder="Enter your password" value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                    />

                    <button type="submit" className="btn btn-primary">
                        {isLogin ? 'Login' : 'Create account'}
                    </button>
                </form>
                <p>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Register' : 'Login'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginModal;