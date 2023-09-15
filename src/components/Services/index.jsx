import "./Services.css";
import Titles from "../Titles";

function Services({ data }) {
    return (
        <section className="servicesSection">
            <div className="width">
                <Titles
                    title1="Propositions"
                    title2="Nos Prestations"
                    titleBg="Menuisier"
                />
                <div className="serviceList">
                    {data.map((service) => (
                        <div key={service.id}>
                            <a href={`/services/${service.linkname}`}>
                                <div className="serviceItem">
                                    <img
                                        src={service.cover}
                                        alt={service.title}
                                    />
                                </div>
                            </a>
                            <p>{service.title}</p>
                        </div>
                    ))}
                </div>
                <a href="/services" className="btnServices">
                    Voir nos prestations
                </a>
            </div>
        </section>
    );
}

export default Services;
