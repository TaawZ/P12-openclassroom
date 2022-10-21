import "../css/sidenav.css"
import meditation from "../assets/meditation.svg"
import swimming from "../assets/swimming.svg"
import bicycle from "../assets/bicycle.svg"
import weight from "../assets/weight.svg"





export default function SideNav(){
	return(
		<div className="sidebar">
			<img src={meditation} alt="meditation-icon" />
			<img src={swimming} alt="swimming-icon" />
			<img src={bicycle} alt="bicycle-icon" />
			<img src={weight} alt="weight-icon" />
		</div>
	)
}