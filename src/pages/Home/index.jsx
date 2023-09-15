import Hero from "../../components/Hero/index";
import About from "../../components/About/index";
import Services from "../../components/Services";
import LatestProjects from "../../components/LatestProjects";
import { useEffect, useState } from "react";

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
            <About />
            <Services data={datas} />
            <LatestProjects />
        </>
    );
}

export default Home;
