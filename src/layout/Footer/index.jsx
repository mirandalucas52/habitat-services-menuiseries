import "./Footer.css";
import logo from "../../assets/logodark.svg";
import { Link } from "react-router-dom";

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
                <span className="footerLinks">
                    <ul>
                        <li>
                            <Link to="/habitat-services-menuiseries/">
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link to="/habitat-services-menuiseries/about/">
                                À propos
                            </Link>
                        </li>
                        <li>
                            <Link to="/habitat-services-menuiseries/services/">
                                Prestations
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/habitat-services-menuiseries/news/">
                                Actualités
                            </Link>
                        </li>
                        <li>
                            <Link to="/habitat-services-menuiseries/contact/">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </span>
            </div>
            <p>© Habitat Services Menuiseries. Tous droit résérvés</p>
        </footer>
    );
}

export default Footer;
