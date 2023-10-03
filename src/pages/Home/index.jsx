import Hero from "../../components/Hero/index";
import About from "../../components/About/index";
import Services from "../../components/Services";
import LatestProjects from "../../components/LatestProjects";
import LatestNews from "../../components/LatestNews";
import Testimonials from "../../components/Testimonials";
import React, { useEffect, useState } from "react";

function Home() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("services.json");
            const data = await response.json();
            setDatas(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <Hero />
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
            <Services data={datas} />
            <LatestProjects />
            <LatestNews />
            <Testimonials />
        </>
    );
}

export default Home;
