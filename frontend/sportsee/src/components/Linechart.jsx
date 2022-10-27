import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";
import "../css/linechart.css";

function formatPolarAxis(value = 0) {
	if (value === 1) return "L";
	if (value === 2) return "M";
	if (value === 3) return "M";
	if (value === 4) return "J";
	if (value === 5) return "V";
	if (value === 6) return "S";
	if (value === 7) return "D";
	return value;
}

export default function Linechart({ data }) {
	return (
		<div>
			<LineChart width={250} height={250} className="linechart-container" data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
				<CartesianGrid strokeOpacity="0" />
				<XAxis tickFormatter={formatPolarAxis} fontSize="14px" tickLine={false} axisLine={false} stroke="white" dataKey="day" />
				<YAxis hide={true} />
				<Tooltip />
				<Legend
					verticalAlign="top"
					align="left"
					iconSize={0}
					content={() => (
						<div
							className="my-legend"
							style={{
								color: "white",
								marginTop: "-10px",
								marginLeft: "20px",
								position: "absolute",
								fontSize: "10px",
								fontWeight: "500",
								fontSize: "15px",
								lineHeight: "24px",
								top: "20px",
							}}
						>
							Durée moyenne des
							<br />
							sessions
						</div>
					)}
					margin={{ left: 20 }}
				/>
				<Line dot={false} type="monotone" dataKey="sessionLength" stroke="#E8E8E8" />
			</LineChart>
		</div>
	);
}
