import About from "../../components/About/index";
import "./AboutPage.css";
import PergolaImg from "../../assets/pergola.JPG";
import nfCertif from "../../assets/nf-fr.jpg";
import PVCCertif from "../../assets/menuisierie-PVC-CSTB-certification-qualite.jpg";
import ATCertif from "../../assets/nf-certified-acotherm.png";
import ABImg from "../../assets/logo reseau ab.webp";

function AboutPage() {
    return (
        <>
            <About />
            <article>
                <h2>Membre Professionnel</h2>
                <h3>Du réseau des Ateliers de la Baie</h3>
                <p>
                    Fort d’un maillage sur toute l’Occitanie, le réseau de
                    professionnel des Ateliers de la Baie, apporte à tous vos
                    projets de travaux de votre maison une garantie de fiabilité
                    et de durabilité. Choisir un artisan qualité des Ateliers de
                    la Baie c’est l’assurance du respect de notre charte de
                    qualité qui garantie une étude approfondie de votre projet :
                </p>
                <ul>
                    <li>La remise d’un devis détaillé sans engagement</li>
                    <li>Une installation dans le règles de l’art</li>
                    <li>La meilleure solution technique</li>
                    <li>Un service après-vente sans faille</li>
                </ul>
                <img src={PergolaImg} alt="" />
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
        </>
    );
}

export default AboutPage;
