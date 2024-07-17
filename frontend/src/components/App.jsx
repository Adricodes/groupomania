import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
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