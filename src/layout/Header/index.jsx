import logo from "../../assets/logo_habitat_services_menuiseries.svg";
import "./Header.css";

function Header() {
    return (
        <header>
            <div className="logo">
                <a href="/home">
                    <img src={logo} alt="Habitat services menuiseries" />
                </a>
            </div>
            <nav>
                <ul>
                    <li>À propos</li>
                    <li>Prestations</li>
                    <li>Chantiers</li>
                    <li>Partenaires</li>
                    <li>Actualités</li>
                    <li>Contact</li>
                </ul>
                <div className="numTel">
                    <i class="fa fa-phone"></i>
                    <a href="tel:06 51 85 57 93">06 51 85 57 93</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
