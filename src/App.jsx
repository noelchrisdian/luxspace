import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Homepage } from "./pages/Homepage";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Homepage />} />
				</Routes>
			</Router>
		</div>
	)
}

export { App };