import "./Testimonials.css";
import Titles from "../Titles";
import ReactSlickTestimonials from "../ReactSlickTestimonials";

function LatestProjects() {
    return (
        <section className="testimonialsSection">
            <Titles
                title1="Réference de qualité"
                title2="De nos clients"
                titleBg="Témoignages"
            />
            <ReactSlickTestimonials />
        </section>
    );
}

export default LatestProjects;
