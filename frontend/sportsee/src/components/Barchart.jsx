import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import "../css/barchart.css";

export default function barchart({ data }) {
	return (
		<div className="barchart-container">
			<span className="chart-title">Activité quotidienne</span>
			<ResponsiveContainer>
				<BarChart data={data} barSize={8} maxBarSize={300} barGap={8}>
					<CartesianGrid strokeDasharray="1" vertical={false}></CartesianGrid>
					<XAxis ticks={["09:00", "10:00", "11:00"]} tickLine={false} dataKey="day"></XAxis>
					<YAxis axisLine={false} tickLine={false} orientation="right" margin={20} />
					<Tooltip />
					<Legend verticalAlign="top" align="right" offset={-10} iconType="circle" iconSize={8} />
					<Bar name="Poids (kg)" radius={[10, 10, 0, 0]} dataKey="kilogram" fill="#282D30" />
					<Bar name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} dataKey="calories" fill="#E60000" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
