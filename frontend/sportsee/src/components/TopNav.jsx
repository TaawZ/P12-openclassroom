import logo from "../assets/logo.svg"
import "../css/topnav.css"

export default function TopNav() {
	return(
		<nav className="topnav-container">
			<img src={logo} alt="logo" />
			<button>Accueil</button>
			<button>Profil</button>
			<button>Réglage</button>
			<button>Communauté</button>
		</nav>
	)
}