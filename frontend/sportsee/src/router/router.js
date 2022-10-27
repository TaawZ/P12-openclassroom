import { Routes, Route } from "react-router-dom";
import TopNav from "../components/TopNav.jsx";
import SideNav from "../components/SideNav";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import "../css/app.css";

function Router() {
	return (
		<main>
			<TopNav />
			<SideNav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</main>
	);
}

export default Router;
