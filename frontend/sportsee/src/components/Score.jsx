import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import "../css/score.css";

export default function score({ userScore }) {
	const data = [{ name: "L1", value: userScore * 100 }];
	console.log(userScore);
	const circleSize = 250;
	return (
		<ResponsiveContainer className="score-container" width={250} height={250}>
			<RadialBarChart innerRadius={120} outerRadius={130} barSize={30} data={data} startAngle={180} endAngle={-180}>
				<PolarAngleAxis fill="#FBFBFB" type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
				<RadialBar cornerRadius={10} background clockWise dataKey="value" fill="#FF0000" />
				<text x={circleSize / 2} y={circleSize / 2.5} textAnchor="middle" dominantBaseline="middle" className="progress-label">
					{userScore * 100}
				</text>
				<text x={circleSize / 2} y={circleSize / 1.8} textAnchor="middle" dominantBaseline="middle" className="progress-label-text">
					% de votre objectif
				</text>
			</RadialBarChart>
		</ResponsiveContainer>
	);
}
