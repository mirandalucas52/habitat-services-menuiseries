import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
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

        if (
            location.pathname.includes("/about") ||
            location.pathname.includes("/news") ||
            location.pathname.includes("/contact")
        ) {
            setHeaderStyle({ background: "#17223c", position: "initial" });
        } else if (location.pathname.includes("/services")) {
            setHeaderStyle({ background: "transparent", position: "absolute" });
        } else {
            setHeaderStyle({});
        }
    }, [location.pathname]);

    return (
        <header
            style={headerStyle}
            className={`header ${scrollY > 400 ? "fixed" : ""}`}
        >
            <div className="logo">
                <Link to="/habitat-services-menuiseries/">
                    <img src={logo} alt="Habitat services menuiseries" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/habitat-services-menuiseries/"
                            className={
                                location.pathname ===
                                "/habitat-services-menuiseries/"
                                    ? "active"
                                    : ""
                            }
                        >
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/habitat-services-menuiseries/about/"
                            className={
                                location.pathname.includes(
                                    "/habitat-services-menuiseries/about/"
                                )
                                    ? "active"
                                    : ""
                            }
                        >
                            À propos
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/habitat-services-menuiseries/services/"
                            className={
                                location.pathname.includes(
                                    "/habitat-services-menuiseries/services/"
                                )
                                    ? "active"
                                    : ""
                            }
                        >
                            Prestations
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/habitat-services-menuiseries/news/"
                            className={
                                location.pathname.includes(
                                    "/habitat-services-menuiseries/news/"
                                )
                                    ? "active"
                                    : ""
                            }
                        >
                            Actualités
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/habitat-services-menuiseries/contact/"
                            className={
                                location.pathname.includes(
                                    "/habitat-services-menuiseries/contact/"
                                )
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
