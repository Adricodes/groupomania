import '../styles/postscss';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Post() {
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

    // const storeUserCredentials = (userId, token) => {
    //     localStorage.setItem('userId', userId);
    //     localStorage.setItem('token', token);
    // };

    // Function to handle storing data and redirecting

    const handleLogin = () => {
        const userId = "yourUserIdHere";
        const token = "yourTokenHere";

        localStorage.setItem('userId', userId);
    }

    return (
        <div>
            <form action="" id="post" method="post" onSubmit={handleSubmit}>
                <h1>Post</h1>
                <p className="item">
                    <label htmlFor="title"> Title</label>
                    <input type="title" name="title" id="title" value={password}
                        onChange={e => setTitle(e.target.value)}
                    />
                </p>
                <p className="item">
                    <label htmlFor="content"> Content</label>
                    <input type="content" name="content" id="content" value={password}
                        onChange={e => setContent(e.target.value)}
                    />
                </p>
           
                <p className="item">
                    <input type="submit" value="title" />
                </p>
            </form>
        </div>
    )
}

export default Post;