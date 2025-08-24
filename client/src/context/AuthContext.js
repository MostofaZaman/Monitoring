import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: null, user: null });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                 // Check if token is expired
                const isExpired = decoded.exp * 1000 < Date.now();
                if (isExpired) {
                    localStorage.removeItem('token');
                } else {
                    setAuth({ token, user: { id: decoded.user.id } });
                }
            } catch (error) {
                console.error("Invalid token:", error);
                localStorage.removeItem('token');
            }
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token);
        setAuth({ token, user: { id: decoded.user.id } });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({ token: null, user: null });
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
