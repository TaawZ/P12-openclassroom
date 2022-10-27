import "../css/hello.css";

export default function Hello({ name }) {
	return (
		<div className="container">
			<div className="name-container">
				<span>Bonjour</span>
				<span className="name-color">{name}</span>
			</div>
			<p>Félicitations ! Vous avez explosé vos objectifs hier</p>
		</div>
	);
}
