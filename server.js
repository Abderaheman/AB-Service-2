const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();

// Middleware pour analyser le corps des requêtes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour gérer le formulaire de contact
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Configuration du transporteur d'email (par exemple Gmail)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'votreemail@gmail.com', // Remplacez par votre email
            pass: 'votre mot de passe' // Remplacez par votre mot de passe
        }
    });

    // Options de l'email
    const mailOptions = {
        from: email,
        to: 'votreemail@gmail.com', // Remplacez par votre email
        subject: `Nouveau message de ${name}`,
        text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Envoyer l'email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Erreur lors de l\'envoi de l\'email');
        }
        res.status(200).send('Message envoyé avec succès');
    });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
