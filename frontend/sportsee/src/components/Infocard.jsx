import "../css/infocard.css";

export default function Infocard({ elt, value, img, unit }) {
	return (
		<div className="card">
			<img src={img}></img>
			<div className="text-container">
				<span className="value">
					{value}
					{unit}
				</span>
				<span className="elements">{elt}</span>
			</div>
		</div>
	);
}
