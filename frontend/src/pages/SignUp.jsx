import '../styles/SignUp.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = e => {// Prevent the default submit and page reload
        e.preventDefault()

        // Handle validations
        axios
            .post("http://localhost:3000/api/auth/signup", { email, password, firstName, lastName })
            .then(response => {
                console.log(response)
                // Handle response
                navigate('/login');
            })
            .catch(error => {
                setErrorMessage('Oops, there is an error!')
            })
    }

    return (
        <div>
            {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <form action="" id="firstName" method="post" onSubmit={handleSubmit}>
                <h1>Sign up</h1>
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
                    <input type="submit" value="signup" />
                </p>
            </form>
        </div>
    )
}


export default SignUp;