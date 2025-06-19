import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Details } from "./pages/Details";
import { Cart } from "./pages/Cart";
import './app.css';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/categories/:idc" element={<Details />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</Router>
		</div>
	)
}

export { App };