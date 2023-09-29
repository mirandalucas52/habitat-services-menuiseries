import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_7x41xoh",
                "template_7w0w8n6",
                form.current,
                "YO2Sy70bfI-O562iR"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <div className="contactDisplay">
                <span>
                    <input
                        placeholder="VOTRE NOM:"
                        type="text"
                        name="from_name"
                    />

                    <input
                        placeholder="VOTRE EMAIL:"
                        type="email"
                        name="from_email"
                    />
                </span>
                <span>
                    <input placeholder="VOTRE TELEPHONE:" name="from_phone" />

                    <input placeholder="OBJET:" name="from_obj" />
                </span>
            </div>
            <textarea placeholder="VOTRE MESSAGE:" name="from_msg" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default ContactForm;
