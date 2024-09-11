// Imports
import '../styles/Profile.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Profile() {
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    // Function handles account deletion by clearing localStorage and removing the entry from the database
    const handleSubmit = () => {
        console.log("hello!")
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (token) {
            axios

                .delete(`http://localhost:3000/api/auth/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(() => {
                    localStorage.clear();
                    navigate('/signup'); // Redirect to signup portal upon successful account deletion
                    console.log('Account successfully deleted!');
                })
                .catch((error) => {
                    console.error('Failed to delete account:', error);
                    setErrorMessage(error.message);
                });
        }
    };

    return (
        <div className="portal-profile__wrapper">
            {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <div className="profile">


                <button
                    className="profile__deactivate-btn"
                    onClick={handleSubmit}>
                    Deactivate account
                </button>
            </div>
        </div>
    );
}

export default Profile;