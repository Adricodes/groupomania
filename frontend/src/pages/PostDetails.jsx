import '../styles/PostDetails.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function PostDetails() {
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [usersRead, setUsersRead] = useState('')
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = e => {// Prevent the default submit and page reload
        e.preventDefault()

        axios
        .post("http://localhost:3000/api/post", { userId, title, content, usersRead})
        .then(response => {
            console.log(response)
            
            const userId = response.data.userId;
            const token = response.data.token;
            localStorage.setItem("userId", JSON.stringify(userId));
            localStorage.setItem("token", JSON.stringify(token));
          
            navigate('/.profile');

        })
        .catch(error => {
            setErrorMessage('Oops, there is an error!')
        })
}

return (
    <div>
        {/* FIXME update form below to just show the post details using simple 
        tags like h2 for title and p for content and img for images */}
            <h2>{title}</h2>
            <p>{content}</p>
    </div>
)
}

export default PostDetails;