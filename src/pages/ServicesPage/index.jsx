import { useEffect } from "react";
import About from "../../components/About/index";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";
import "./ServicesPage.css";
import SmallHero from "../../components/SmallHero";

function ServicesPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
    return (
        <main className="servicesPage">
            <SmallHero />
            <About
                content="Nous comprenons à quel point il est important de préserver les objets ayant une valeur sentimentale, et nous ferons donc tout ce qui est en notre pouvoir pour réparer un objet nécessitant des réparations.
                <br/>
                <br/>
                En fin de compte, notre travail parle de lui-même. Chaque personne que nous avons servie nous a laissé une impression durable, et nous sommes impatients de servir de nombreuses autres personnes à l'avenir. Nous prenons un grand plaisir à voir le sourire de satisfaction d'un client lorsque nous livrons notre produit fini. Nous prenons très au sérieux notre métier de menuisier et nous nous efforcerons de dépasser les attentes des clients à chaque travail."
            />
            <Services />
            <div className="testiMargin">
                <Testimonials />
            </div>
        </main>
    );
}

export default ServicesPage;
