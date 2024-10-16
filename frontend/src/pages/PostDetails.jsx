import '../styles/PostDetails.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function PostDetails() {
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [usersRead, setUsersRead] = useState('')
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    const postId = 1
    const token = localStorage.getItem('token');

    useEffect(() => {
        getPostDetails();
    }, []);

    const getPostDetails = () => {

        axios
            .get(`http://localhost:3000/api/posts/${postId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                console.log(response)

                // TODO set response post to react use state variable call it post
            })
            .catch(error => {
                setErrorMessage('Oops, there is an error!')
            })
    }


    return (
        <div className="postdetail">
            <h2 className='postDetailTitle'>{title}</h2>
            <p className='postDetailContent'>{content}</p>
            {/* <img alt={`media of ${title}`} src={mediaUrl} /> */}
        </div>
    )
}

export default PostDetails;