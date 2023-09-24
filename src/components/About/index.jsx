import "./About.css";

function About({ content }) {
    return (
        <section className="aboutSection">
            <div>
                <h3>Expertise Menuiserie</h3>
                <h4>Des mains expertes, des projets sur-mesure, de qualité</h4>
            </div>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </section>
    );
}

export default About;
