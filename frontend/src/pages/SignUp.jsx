import '../styles/SignUp.css';
import axios from "axios";
import { useState } from "react";


function SignUp() {
    const handleSubmit = e => {
        // Prevent the default submit and page reload
        e.preventDefault()

        // Handle validations
        axios
            .post("http://localhost:3000/api/auth/signup", { email, password })
            .then(response => {
                console.log(response)
                // Handle response
            })
    }

    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    return (
        <div>
            <form action="" id="signup" method="post" onSubmit={handleSubmit}>
                <h1>Sign up</h1>
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