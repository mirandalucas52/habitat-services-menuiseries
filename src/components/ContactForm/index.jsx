import React, { Component } from "react";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            objet: "",
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, phone, message, objet } =
            this.state;

        fetch("/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                message,
                objet,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Vous pouvez ajouter ici une logique pour afficher un message de succès à l'utilisateur
            })
            .catch((error) => {
                console.error(error);
                // Vous pouvez ajouter ici une logique pour afficher un message d'erreur à l'utilisateur
            });
    };

    render() {
        return (
            <div>
                <h2>Contactez-nous</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="firstName">Prénom:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Nom:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="objet">Objet:</label>
                        <input
                            type="text"
                            id="objet"
                            name="objet"
                            value={this.state.objet}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Téléphone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={this.state.message}
                            onChange={this.handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        );
    }
}

export default ContactForm;
