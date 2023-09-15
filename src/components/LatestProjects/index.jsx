import "./LatestProjects.css";
import Titles from "../Titles";
import Carousel from "../Carousel";
import { useEffect, useState } from "react";

function LatestProjects() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("projects.json");
            const data = await response.json();
            setDatas(data);
        };
        fetchData();
    }, []);

    return (
        <section className="latestProjectsSection">
            <div className="latestTitles">
                <Titles
                    title1="Jetez un coup d'oeil à"
                    title2="Nos Derniers Chantiers"
                    titleBg="Presente"
                />
                <Carousel data={datas} />
            </div>
        </section>
    );
}

export default LatestProjects;
