import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    const { auth, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/'); // Redirect to home on logout
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', borderBottom: '1px solid #ccc' }}>
            <Link to="/">Home</Link>
            {auth.token ? (
                <>
                    {/* Link to a future dashboard */}
                    <Link to="/dashboard">Dashboard</Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    );
};

export default Navbar;
