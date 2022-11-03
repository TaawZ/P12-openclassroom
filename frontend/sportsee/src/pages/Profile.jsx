import React from "react";
import { getData } from "../api";
import { useEffect, useState } from "react";
import "../css/profile.css";
import Hello from "../components/Hello";
import Barchart from "../components/Barchart";
import Linechart from "../components/Linechart";
import Radarchart from "../components/Radarchart";
import Score from "../components/Score";
import Infocard from "../components/Infocard";
import Lipids from "../assets/fat-icon.svg";
import Carbs from "../assets/carbs-icon.svg";
import Protein from "../assets/protein-icon.svg";
import Calories from "../assets/calories-icon.svg";

export default function Profile() {
	const [width, setWidth] = useState([]);
	const [userData, setUserData] = useState([]);
	const [userActivity, setUserActivity] = useState([]);
	const [userSessions, setUserSessions] = useState([]);
	const [userPerformance, setUserPerformance] = useState([]);

	const breakpoint = 1034;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const result = await getData("http://localhost:3000/user/12");
			setUserData(result.data);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const result = await getData("http://localhost:3000/user/12/activity");
			setUserActivity(result.data);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const result = await getData("http://localhost:3000/user/12/average-sessions");
			setUserSessions(result.data);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			const result = await getData("http://localhost:3000/user/12/performance");
			setUserPerformance(result.data);
		};
		fetchData();
	}, []);
	return (
		<div className="page">
			<div className="profile-content">
				<div>
					<Hello name={userData.userInfos?.firstName} />
					<Barchart data={userActivity?.sessions} />
				</div>
				<div className="profile-chart">
					<Linechart data={userSessions?.sessions} />
					<Radarchart data={userPerformance?.data} />
					<Score userScore={userData?.todayScore} />
				</div>

				<div>
					{width < breakpoint ? (
						<div className="info-container">
							<Infocard elt="Calories" value={userData?.keyData?.lipidCount} img={Calories} unit="kCal" />
							<Infocard elt="Proteines" value={userData?.keyData?.lipidCount} img={Protein} unit="g" />
							<Infocard elt="Glucide" value={userData?.keyData?.lipidCount} img={Carbs} unit="g" />
							<Infocard elt="Lipides" value={userData?.keyData?.lipidCount} img={Lipids} unit="g" />
						</div>
					) : null}
				</div>
			</div>
			{width > breakpoint ? (
				<div className="info-container">
					<Infocard elt="Calories" value={userData?.keyData?.lipidCount} img={Calories} unit="kCal" />
					<Infocard elt="Proteines" value={userData?.keyData?.lipidCount} img={Protein} unit="g" />
					<Infocard elt="Glucide" value={userData?.keyData?.lipidCount} img={Carbs} unit="g" />
					<Infocard elt="Lipides" value={userData?.keyData?.lipidCount} img={Lipids} unit="g" />
				</div>
			) : null}
		</div>
	);
}
