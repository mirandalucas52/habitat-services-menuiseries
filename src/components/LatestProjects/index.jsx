import "./LatestProjects.css";
import Titles from "../Titles";
import ReactSlick from "../ReactSlick";

function LatestProjects() {
    return (
        <section className="latestProjectsSection">
            <div className="latestTitles">
                <Titles
                    title1="Jetez un coup d'oeil à"
                    title2="Nos Derniers Chantiers"
                    titleBg="Presente"
                />
            </div>
            <ReactSlick />
        </section>
    );
}

export default LatestProjects;
