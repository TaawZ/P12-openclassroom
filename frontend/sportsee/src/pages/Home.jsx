import { getData } from "../api";
import { useEffect, useState } from "react";
import { Route, Link, Routes, useParams } from "react-router-dom";

function Home() {
	const [data, setData] = useState([]);
	var id = 12;
	useEffect(() => {
		const fetchData = async () => {
			const result = await getData(`http://localhost:3000/user/${id}`);
			setData(result.data);
		};
		fetchData();
	}, [id]);
	console.log(data);
	return (
		<div className="profile-content">
			<h1>{data.id}</h1>
		</div>
	);
}

export default Home;
