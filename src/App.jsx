import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Details } from "./pages/Details";
import './app.css';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route path="/categories/:idc" element={<Details />} />
				</Routes>
			</Router>
		</div>
	)
}

export { App };