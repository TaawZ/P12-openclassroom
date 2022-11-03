import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import "../css/score.css";

export default function score({ userScore }) {
	const data = [{ name: "L1", value: userScore * 100 }];
	const circleSize = 250;
	return (
		<div className="score-container">
			<span>Score</span>
			<ResponsiveContainer>
				<RadialBarChart innerRadius={90} outerRadius={100} barSize={30} data={data} startAngle={180} endAngle={-180}>
					<PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
					<RadialBar cornerRadius={10} clockWise dataKey="value" fill="#FF0000" />
					<text x={circleSize / 2} y={circleSize / 2.8} textAnchor="middle" dominantBaseline="middle" className="progress-label">
						{userScore * 100} %
					</text>
					<text x={circleSize / 2} y={circleSize / 2} textAnchor="middle" dominantBaseline="middle" className="progress-label-text">
						de votre
					</text>
					<text x={circleSize / 2} y={circleSize / 1.6} textAnchor="middle" dominantBaseline="middle" className="progress-label-text">
						objectif
					</text>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
}
