import '../styles/SignUp.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')
    const userId = useState('')
    const token = useState('')

    const handleSubmit = e => {// Prevent the default submit and page reload
        e.preventDefault()}

        // Handle validations
        axios
        .post("http://localhost:3000/api/auth/signup", { email, password, firstName, lastName })
        .then(response => {
            console.log(response)
                // Handle response
                navigate('/login');
            })
                // TODO add userId and token to local storage

                

 // Function to handle storing data and redirecting
 const handleLogin = () => {
    const userId = "yourUserIdHere";
    const token = "yourTokenHere";

                localStorage.setItem('userId', userId);
                localStorage.setItem('token', token);
                
                axios
                // FIXME redirect to homepage
                .post("http://localhost:3000/api/auth/login", { email, password, firstName, lastName })
                .then(response => {
                    console.log(response)
                        navigate('/');
                
            })
            .catch(error => {
                // TODO Display user friendly error message
                setErrorMessage('Oops, there is an error!')
            })
    }

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
                    <input type="submit" value="Login" />
                </p>
            </form>
        </div>
    )
}

export default Login;


// import '../styles/Login.css';
// import axios from "axios";
// import { useState } from "react";

// function Login() {
//     const handleSubmit = e => {
//         // Prevent the default submit and page reload
//         const handleSubmit = (e) => {
//             e.preventDefault(); // Prevents the default form submission and page reload
//             // saveUserData(user);
//             alert('User data saved!');
//         };

//         return (
//             <div>
//                 <h1>User Information</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label>Name:</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={user.name}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div>
//                         <label>Email:</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={user.email}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <button type="submit">Save</button>
//                 </form>

//                 <h2>Stored User Data:</h2>
//                 <p>Name: {user.name}</p>
//                 <p>Email: {user.email}</p>
//             </div>
//         );
//     };

//     // Handle validations
//     axios
//         .post("http://localhost:3000/api/auth/login", { email, password })
//         .then(response => {

//             // Handle response
//             console.log(response)
//             // TODO Store user information in local storage
//             const saveUserInfo = (userInfo) => {
//                 localStorage.setItem('user', JSON.stringify(userInfo));
//             };
//             // TODO redirect user to home page
//             const handleRedirect = () => {
//                 navigate('/');
//             };

//             return (
//                 <div>
//                     <h1>Welcome to Groupomania</h1>
//                     <button onClick={handleRedirect}>Go to Homepage</button>
//                 </div>
//             );
//         });

//     // TODO handle errors by displaying error message
//     console.error('Error occurred');
// };

// // const [email, setEmail] = useState()
// // const [password, setPassword] = useState()



// // function Submit() {
// //     const handleSubmit = e => {
// //         <div>
// //             <form action="" id="login" method="post" onSubmit={handleSubmit}>
// //                 <h1>Login</h1>
// //                 <p className="item">
// //                     <label htmlFor="email"> Email </label>
// //                     <input type="email" name="email" id="email" value={email}
// //                         onChange={e => setEmail(e.target.value)}
// //                     />
// //                 </p>
// //                 <p className="item">
// //                     <label for="password"> Password </label>
// //                     <input type="password" name="password" id="password" value={password}
// //                         onChange={e => setPassword(e.target.value)}
// //                     />
// //                 </p>
// //             </form>
// //             <script>
// //                 document.getElementById('login').addEventListener('submit', function(event) {
// //                     // Prevent the default form submission and page reload


// //                     // You can add custom logic here
// //                     alert('Form submission prevented!')};
// //                 { });
// //             </script>
// //         </div>

// // }

// export default Login;