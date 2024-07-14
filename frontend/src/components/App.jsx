import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Pages/Home";
import News from "./pages/News";

function App() {
	return (
		<div>
			<form action="" id="login" method="post">
				<h1>Login</h1>
				<p className="item">
					<label for="email"> Email </label>
					<input type="email" name="email" id="email" />
				</p>
				<p className="item">
					<label for="password"> Password </label>
					<input type="password" name="password" id="password" />
				</p>
				<p className="item">
					<input type="submit" value="Login" />
				</p>
			</form>
		</div>
	)
}

function App => {
	return (
		<Router>
			<Navbar />
			<main className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/news" element={<News />} />
					{/* Define other routes that you need*/}
				</Routes>
			</main>
		</Router>
	);
};

export default App;