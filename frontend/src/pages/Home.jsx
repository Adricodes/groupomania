// import '../styles/Home.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
    return (
        <div>
            <form action="" id="home" method="get">
                <h1>Home</h1>
                <p className="item">
                    {/* <label for="email"> Email </label>
                    <input type="email" name="email" id="email" /> */}
                </p>
                {/* <p className="item">
                    <label for="password"> Password </label>
                    <input type="password" name="password" id="password" />
                </p> */}
                <p className="item">
                    <input type="submit" value="Home" />
                </p>
            </form>
        </div>
    )
}



export default Home;