import "./SmallHero.css";
import heroSmallImg from "../../assets/menuisierbg.webp";

function SmallHero() {
    return (
        <section className="smallHeroSection">
            <img src={heroSmallImg} alt="fond accueil" />
            <article>
                <h1>Nos Services</h1>
                <p>
                    Nous sommes fiers de fournir des services de menuiserie de
                    haute qualité. Nous utilisons les outils les plus innovants
                    pour garantir que tous nos travaux de construction sont
                    menés selon des normes impeccables. Nous fournissons à nos
                    clients les meilleurs résultats possibles qui répondent
                    exactement à leurs exigences.
                </p>
            </article>
        </section>
    );
}

export default SmallHero;
