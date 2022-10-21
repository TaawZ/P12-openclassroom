import TopNav from "./components/TopNav.jsx";
import SideNav from "./components/SideNav.jsx";


import axios from "axios";
const data = axios.get("http://localhost:3000/user/12/").then((resp) => {
	return resp.data;
});

console.log(data);

function App() {
	return (
		<main>
			<TopNav />
			<SideNav />
		</main>
	)
}

export default App;
