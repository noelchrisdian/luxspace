import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Success } from "./pages/Success";
import './app.css';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/categories/:idc" element={<Details />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/success" element={<Success />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	)
}

export { App };