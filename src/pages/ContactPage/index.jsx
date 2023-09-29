import Titles from "../../components/Titles";
import "./ContactPage.css";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm";

function ContactPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
    return (
        <>
            <main className="contactPage">
                <Titles
                    title1="Des questions ?"
                    title2="Envoyez-nous un message"
                    titleBg="Contactez-nous"
                />
                <ContactForm />
            </main>
            <iframe
                className="iframeMap"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11710.463292318744!2d0.596131!3d42.7964709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a861e48a7759c7%3A0x7b34136dcc62ae15!2sHabitat%20Services%20Menuiseries!5e0!3m2!1sfr!2sfr!4v1696001617808!5m2!1sfr!2sfr"
                width="100%"
                height="400"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="mapgoogle"
            ></iframe>
        </>
    );
}

export default ContactPage;
