// Filename: App.js

import {
	BrowserRouter as Router,
	Link,
	Routes,
	Route,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Search from "./Components/Search";
import List from "./Components/List";

function RoutingNest() {
	return (
		<div className="App">
			<Router>
				<nav>
					<Link to="/">Home</Link>
					<Link to="courses">Courses</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/courses"
						element={<Courses />}
					>
						<Route
							path="search"
							element={<Search />}
						/>
						<Route
							path="list"
							element={<List />}
						/>
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default RoutingNest;
