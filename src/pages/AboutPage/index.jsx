import About from "../../components/About/index";
import "./AboutPage.css";
import PergolaImg from "../../assets/pergola.JPG";
import nfCertif from "../../assets/nf-fr.jpg";
import PVCCertif from "../../assets/menuiseriepvc.jpg";
import ATCertif from "../../assets/nf-certified-acotherm.png";
import ABImg from "../../assets/logo reseau ab.webp";
import { useEffect } from "react";

function AboutPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
    return (
        <main className="aboutPage">
            <About
                content="Habitat Services Menuiseries est une entreprise spécialisée dans
                la menuiserie en aluminium, bois et PVC, ainsi que dans la
                plâtrerie et l'isolation. Forts de notre expérience et de notre
                réseau de partenaires français, nous sommes fiers de réaliser
                des projets sur mesure pour nos clients.
                <br />
                <br />
                Nous proposons une gamme complète de services de menuiserie,
                notamment la fabrication et l'installation de fenêtres, de
                vérandas, de portes d'entrée, de portes de garages, d'escaliers,
                de plâtrerie, de volets et de stores."
            />
            <article>
                <div>
                    <h2>Membre Professionnel</h2>
                    <h3>Du réseau des Ateliers de la Baie</h3>
                    <p>
                        Fort d’un maillage sur toute l’Occitanie, le réseau de
                        professionnel des Ateliers de la Baie, apporte à tous
                        vos projets de travaux de votre maison une garantie de
                        fiabilité et de durabilité.
                        <br />
                        <br />
                        <br />
                        <span>
                            Choisir un artisan qualité des Ateliers de la Baie
                            c’est l’assurance du respect de notre charte de
                            qualité qui garantie une étude approfondie de votre
                            projet :
                        </span>
                    </p>
                    <ul>
                        <li>La remise d’un devis détaillé sans engagement</li>
                        <li>Une installation dans le règles de l’art</li>
                        <li>La meilleure solution technique</li>
                        <li>Un service après-vente sans faille</li>
                    </ul>
                </div>
                <img className="pergolaImg" src={PergolaImg} alt="" />
            </article>
            <div className="partenaires">
                <a href="https://evaluation.cstb.fr/fr/certifications-produits-services/produit/fenetres-blocs-baies-pvc/">
                    <img src={nfCertif} alt="" />
                </a>
                <a href="https://www.reseau-atelierdelabaie.fr/">
                    <img src={ABImg} alt="" />
                </a>
                <a href="https://evaluation.cstb.fr/fr/certifications-produits-services/produit/fenetres-blocs-baies-pvc/">
                    <img src={PVCCertif} alt="" />
                </a>
                <a href="https://evaluation.cstb.fr/fr/certifications-produits-services/produit/fenetres-blocs-baies-pvc/">
                    <img src={ATCertif} alt="" />
                </a>
            </div>
        </main>
    );
}

export default AboutPage;
