const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "mirandalucas52@gmail.com",
        pass: "frax ymxs vezv soeu",
    },
});

app.post("/send-email", (req, res) => {
    const { firstName, lastName, email, phone, message, objet } = req.body;

    // Configuration de l'e-mail
    const mailOptions = {
        from: email, // Adresse e-mail de l'expéditeur
        to: "mirandalucas52@gmail.com", // Adresse e-mail du destinataire
        subject: objet,
        text: `Nom: ${lastName} \nPrénom: ${firstName}\nE-mail: ${email}\nTéléphone: ${phone}\nMessage: ${message}`,
    };

    // Envoi de l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({
                message: "Erreur lors de l'envoi de l'e-mail",
            });
        } else {
            console.log("E-mail envoyé : " + info.response);
            res.json({ message: "E-mail envoyé avec succès" });
        }
    });
});

app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
