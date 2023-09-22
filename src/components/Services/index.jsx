import "./Services.css";
import Titles from "../Titles";
import ServicesCarousel from "../ServicesCarousel";

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
                <a href="/services" className="btnServices">
                    Voir nos prestations
                </a>
            </div>
        </section>
    );
}

export default Services;
