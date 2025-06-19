import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Details } from "./pages/Details";
import { Homepage } from "./pages/Homepage";
import { Success } from "./pages/Success";
import './app.css';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/categories/:idc" element={<Details />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/success" element={<Success />} />
				</Routes>
			</Router>
		</div>
	)
}

export { App };