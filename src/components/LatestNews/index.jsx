import "./LatestNews.css";
import Titles from "../Titles";

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
        </section>
    );
}

export default LatestProjects;
