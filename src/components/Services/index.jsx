import "./Services.css";
import Titles from "../Titles";
import ServicesCarousel from "../ServicesCarousel";
import { Link } from "react-router-dom";

function Services() {
    return (
        <section className="servicesSection">
            <div className="width">
                <Titles
                    title1="Propositions"
                    title2="Nos Prestations"
                    titleBg="Menuisier"
                />
                <ServicesCarousel />
                <Link
                    to="/habitat-services-menuiseries/services/"
                    className="btnServices"
                >
                    Voir nos prestations
                </Link>
            </div>
        </section>
    );
}

export default Services;
