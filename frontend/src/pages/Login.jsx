import '../styles/Login.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Login() {
    // FIXME initialize variables to empty strings
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = e => {// Prevent the default submit and page reload
        e.preventDefault()
        // FIXME FIRST name and last name are not needed to login
        axios
            .post("http://localhost:3000/api/auth/login", { email, password, firstName, lastName })
            .then(response => {
                console.log(response)
                 // TODO add userId and token to local storage by calling stored user credentials function
                navigate('/');
            })
            .catch(error => {
                setErrorMessage('Oops, there is an error!')
            })
    }

   const storeUserCredentials = (userId, token) => {
        localStorage.setItem('userId', userId);
        localStorage.setItem('token', token);
    };

    // Function to handle storing data and redirecting

    const handleLogin = () => {
        const userId = "yourUserIdHere";
        const token = "yourTokenHere";

        localStorage.setItem('userId', userId);


    }
    // FIXME remove first name and last name
    return (
        <div>
            {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <form action="" id="firstName" method="post" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <p className="item">
                    <label htmlFor="firstName">First name</label>
                    <input type="firstName" name="firstName" id="SecondFirstNameId" value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </p>
                <p className="item">
                    <label htmlFor="lastName">Last name</label>
                    <input type="lastName" name="lasttName" id="lastName" value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </p>
                <p className="item">
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="email" value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </p>
                <p className="item">
                    <label htmlFor="password"> Password </label>
                    <input type="password" name="password" id="password" value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </p>
                <p className="item">
                    <input type="submit" value="login" />
                </p>
            </form>
        </div>
    )
}

export default Login;