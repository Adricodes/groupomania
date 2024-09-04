// Imports
import '../profile.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Button from '../button/Button.js';

function Profile() {
    const [userId, setUserId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profilePicUrl, setProfilePicUrl] = useState(null); // Store the URL of the profile picture displayed in the UI
    const [profilePicFile, setProfilePicFile] = useState(null); // Stores selected image file when a user chooses to update their profile picture

    const navigate = useNavigate();

    // Function gets user data to display on profile page
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;

            axios
                .get(`http://localhost:3001/api/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    setUserId(userId);
                    setProfilePicUrl(response.data.profilePic);
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [userId]); // Component will dynamically update with the correct profile data whenever the userId changes

    // Function dynamically updates user information on change
    const handleProfileChange = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        if (token) {
            const formData = new FormData();
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('image', profilePicFile);

            axios
                .post(`http://localhost:3001/api/${userId}`, formData, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    setProfilePicUrl(response.data.user.profilePic);
                    navigate('/'); // Redirect to /upon successful profile update
                    console.log('Profile updated successfully');
                })
                .catch((error) => {
                    console.error('Failed to update profile:', error);
                });
        }
    };

    // Function handles account deletion by clearing localStorage and removing the entry from the database
    const handleAccountDeactivation = () => {
        const token = localStorage.getItem('token');
        if (token) {
            axios
                .delete(`http://localhost:3001/api/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(() => {
                    localStorage.clear();
                    navigate('/signup'); // Redirect to signup portal upon successful account deletion
                    console.log('Account successfully deleted!');
                })
                .catch((error) => {
                    console.error('Failed to delete account:', error);
                });
        }
    };

    // Function allows user to preview their new selected profile picture before updating profile
    const setDisplayedImage = (value) => {
        setProfilePicUrl(URL.createObjectURL(value)); // Sets the temporary URL of the selected image
        setProfilePicFile(value); // Sets URL of selected image file
    };

    return (
        <div className="portal-profile__wrapper">
            <div className="profile">
                <img
                    src={profilePicUrl}
                    className="profile__img"
                    alt="User img"
                />
              return (
        <div>
            {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <form action="" id="content" method="post" onSubmit={handleSubmit}>
                <h1>Content</h1>
                <p className="item">
                        onChange={e => setEmail(e.target.value)}
                    </p>
                <p className="item">
                    <input type="submit" value="login" />
                </p>
            </form>
        </div>
    )
             <Button className="profile__update-btn">
                        Update account
                    </Button>
                    <Button
                        className="profile__deactivate-btn"
                        onClick={handleAccountDeactivation}
                    >
                        Deactivate account
                    </Button>
            </div>
        </div>
    );
}

export default Profile;