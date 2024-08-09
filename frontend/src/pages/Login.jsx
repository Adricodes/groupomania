import '../styles/Login.css';
import axios from "axios";
import { useState } from "react";

function Login() {
        const handleSubmit = e => {
            // Prevent the default submit and page reload
            e.preventDefault()
    
            // Handle validations
            axios
                .post("http://localhost:3000/api/auth/login", { email, password })
                .then(response => {
                    console.log(response)
                    // Handle response
                    // TODO Store user infornation in local storage
                    // TODO redirect user to home page
                    // TODO handle errors by displaying error message
                })
        }

        const [email, setEmail] = useState()
        const [password, setPassword] = useState()

    return (
        <div>
            <form action="" id="login" method="post" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <p className="item">
                    <label htmlFor="email"> Email </label>
                    <input type="email" name="email" id="email" value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </p>
                <p className="item">
                    <label for="password"> Password </label>
                    <input type="password" name="password" id="password" value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </p>
                <p className="item">
                    <input type="submit" value="Login"
                    />
                </p>
            </form>
        </div>
    )
}

export default Login;