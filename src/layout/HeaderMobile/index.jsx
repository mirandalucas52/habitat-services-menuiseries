import "./HeaderMobile.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HeaderMobile() {
    const [active, setActive] = useState(false);
    const [scrollYMobile, setScrollYMobile] = useState(0);
    const [headerStyleMobile, setHeaderStyleMobile] = useState({});

    const toggleMenu = () => {
        setActive(!active);
    };

    const navClass = active ? "active" : "";
    const menuIconClass = active ? "cross" : "";

    useEffect(() => {
        const handleScrollMobile = () => {
            const currentScrollYMobile = window.scrollY;
            setScrollYMobile(currentScrollYMobile);
        };

        window.addEventListener("scroll", handleScrollMobile);

        if (scrollYMobile > 200) {
            setHeaderStyleMobile({
                background: "#17223c",
                position: "fixed",
            });
        } else {
            setHeaderStyleMobile({});
        }

        return () => {
            window.removeEventListener("scroll", handleScrollMobile);
        };
    }, [scrollYMobile]);

    return (
        <div className="headerMobile" style={headerStyleMobile}>
            <div className="displayFlexMobile">
                <div className="logo">
                    <Link to="/habitat-services-menuiseries/">
                        <img src={logo} alt="Habitat services menuiseries" />
                    </Link>
                </div>
                <div
                    className={`menuMobile ${menuIconClass}`}
                    onClick={toggleMenu}
                >
                    <span className={`menuIcon ${menuIconClass}`}></span>
                    <span className={`menuIcon ${menuIconClass}`}></span>
                </div>
            </div>
            <nav className={`nav ${navClass}`}>
                <ul>
                    <li>
                        <Link to="/habitat-services-menuiseries/">Accueil</Link>
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
            </nav>
        </div>
    );
}

export default HeaderMobile;
