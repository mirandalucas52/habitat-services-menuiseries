import logo from "../../assets/logo_habitat_services_menuiseries.svg";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Habitat services menuiseries" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={
                                location.pathname === "/" ? "active" : ""
                            }
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={
                                location.pathname.includes("/about")
                                    ? "active"
                                    : ""
                            }
                        >
                            À propos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className={
                                location.pathname.includes("/services")
                                    ? "active"
                                    : ""
                            }
                        >
                            Prestations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className={
                                location.pathname.includes("/projects")
                                    ? "active"
                                    : ""
                            }
                        >
                            Chantiers
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/news"
                            className={
                                location.pathname.includes("/news")
                                    ? "active"
                                    : ""
                            }
                        >
                            Actualités
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={
                                location.pathname.includes("/contact")
                                    ? "active"
                                    : ""
                            }
                        >
                            Contact
                        </Link>
                    </li>
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
