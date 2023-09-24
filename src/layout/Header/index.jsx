import React, { useEffect, useState } from "react";
import logo from "../../assets/logo_habitat_services_menuiseries.svg";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    const [scrollY, setScrollY] = useState(0);
    const [headerStyle, setHeaderStyle] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        // Check if you are on the "/about" page and update the header style
        if (location.pathname.includes("/about")) {
            setHeaderStyle({ background: "#17223c", position: "initial" });
        } else {
            // Reset the style for other pages
            setHeaderStyle({});
        }
    }, [location.pathname]);

    return (
        <header style={headerStyle} className={scrollY > 400 ? "fixed" : ""}>
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
