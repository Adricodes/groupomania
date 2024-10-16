import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function PostMultimedia() {
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const[multimedia, setMultimedia] = useState('')
    const [usersRead, setUsersRead] = useState('')
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = e => {// Prevent the default submit and page reload
        e.preventDefault()

        axios
            .post("http://localhost:3000/api/posts", { userId, title, content, usersRead, multimedia })
            .then(response => {
                console.log(response)
                navigate('/.post');

            })
            .catch(error => {
                setErrorMessage('Oops, there is an error!')
            })
    }
}