import "./Footer.css";
import logo from "../../assets/logo_habitat_services_menuiseries_dark.svg";

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <img src={logo} alt="" />
                <ul className="footerAddress">
                    <li>Habitat Services Menuiseries</li>
                    <li>1 avenue du Marechal Foch,</li>
                    <li>31110 Bagnères de Luchon,</li>
                    <li>France</li>
                    <a href="tel:06 51 85 57 93">06 51 85 57 93</a>
                </ul>
                <ul className="footerLinks">
                    <span>
                        <li>
                            <a href="/">Accueil</a>
                        </li>
                        <li>
                            <a href="/about">À propos</a>
                        </li>
                        <li>
                            <a href="/services">Prestations</a>
                        </li>
                    </span>
                    <span>
                        <li>
                            <a href="/projects">Chantiers</a>
                        </li>
                        <li>
                            <a href="/news">Actualités</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </span>
                </ul>
            </div>
            <p>© Habitat Services Menuiseries. Tous droit résérvés</p>
        </footer>
    );
}

export default Footer;
