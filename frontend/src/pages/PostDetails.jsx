import '../styles/PostDetails.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
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
    const { id } = useParams();

    useEffect(() => {
        getPostDetails();
    }, []);

    const getPostDetails = () => {
        axios
            .get(`http://localhost:3000/api/posts/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(response => {
                const post = response.data;
                console.log(post)

                // TODO set response post to react use state variable call it post
            })
            .catch(error => {
                setErrorMessage('Oops, there is an error!')
            })
    }


    return (
        <div className="postDetailContainer">
        <div className="postdetail">
            <h2 className='postDetailTitle'>{title}</h2>
            <p className='postDetailContent'>{content}</p>
            {/* <img alt={`media of ${title}`} src={mediaUrl} /> */}
        </div>
        </div>
    )
}

export default PostDetails;