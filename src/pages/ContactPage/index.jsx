import Titles from "../../components/Titles";
import "./ContactPage.css";
import { useEffect } from "react";
import ContactForm from "../../components/ContactForm";

function ContactPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);
    return (
        <main className="contactPage">
            <Titles
                title1="Des questions ?"
                title2="Envoyez-nous un message"
                titleBg="Contactez-nous"
            />
            <ContactForm />
        </main>
    );
}

export default ContactPage;
