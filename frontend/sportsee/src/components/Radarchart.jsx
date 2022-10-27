import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import "../css/radar.css";
export default function Radarchart({ data }) {
	function formatPolarAxis(value) {
		if (value === 1) return "Intensité";
		if (value === 2) return "Vitesse";
		if (value === 3) return "Force";
		if (value === 4) return "Endurance";
		if (value === 5) return "Energie";
		if (value === 6) return "Cardio";
		return "unknown";
	}

	return (
		<ResponsiveContainer width={250} height={250}>
			<RadarChart className="radar" data={data}>
				<PolarGrid radialLines={false} stroke="white" />
				<PolarAngleAxis tickLine={false} ticks={false} dataKey="kind" tickFormatter={formatPolarAxis} stroke="white" fontSize="8px" />
				<PolarRadiusAxis domain={[0, 220]} angle={30} stroke="transparent" fill="transparent" />
				<Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} fontWeight="500" fontSize="12px" />
			</RadarChart>
		</ResponsiveContainer>
	);
}
