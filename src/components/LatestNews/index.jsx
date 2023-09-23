import "./LatestNews.css";
import Titles from "../Titles";
import newsFirstImage from "../../assets/actualité1.jpg";
import newsSecondImage from "../../assets/actualité2.jpg";

function LatestProjects() {
    return (
        <section className="latestNewsSection">
            <div className="latestTitles">
                <Titles
                    title1="Suivez Nos"
                    title2="Dernières Actualités"
                    titleBg="Dernières"
                />
            </div>
            <div className="latestNewsContainer">
                <div className="latestNewsWidth">
                    <img src={newsFirstImage} alt="" />
                    <h4>Pose de fenêtres PVC / volets roulants solaire</h4>
                    <span>
                        <div>
                            <i className="fa fa-pencil"></i>
                            <a href="mailto:jean.athane@outlook.fr">
                                jean.athane@outlook.fr
                            </a>
                        </div>
                        <div>
                            <i className="fa fa-folder-open-o"></i> Chantier,
                            Fenêtres / Volets
                        </div>
                    </span>
                    <p>
                        Chantier qui vient d’être réalisé dans la vallée, pose
                        en rénovation de fenêtres PVC de chez Kliplast et de
                        volets roulants solaire (Lames en aluminium, tablier
                        isolé). Motorisation de chez SOMFY, possibilité de
                        programmation individuel, sectorisée ou en totalité
                        (Garantie 5ans).
                    </p>
                </div>
                <div className="latestNewsWidth">
                    <img src={newsSecondImage} alt="" />
                    <h4>Rénovation d’un appartement type T4</h4>
                    <span>
                        <div>
                            <i className="fa fa-pencil"></i>
                            <a href="mailto:jean.athane@outlook.fr">
                                jean.athane@outlook.fr
                            </a>
                        </div>
                        <div>
                            <i className="fa fa-folder-open-o"></i> Chantier,
                            Menuiserie, Escaliers
                        </div>
                    </span>
                    <p>
                        Faux plafonds posés sur solivage bois, isolation 200mm
                        laine de Verre. Pose de doublage demi stil , isolation
                        laine de verre en 120mm. Double plaque de chez
                        Placoplatre avec une performance acoustique supérieure
                        de 3db par rapport au même ouvrage soit 50% de bruits
                        extérieurs en moins (couleur bleu). Les menuiseries ont
                        été posées en amont également par nos soins.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default LatestProjects;
