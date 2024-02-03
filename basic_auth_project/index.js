const express = require("express");
const path = require('path');

const app = express();

function authentication(req, res, next) {
    // Wyciągamy header z tokenem z requestu
    let authheader = req.headers.authorization;
    console.log(req.headers);

    if (!authheader) {
        // Jesli nie ma tokenu to wysylamy odpowiedz z kodem 401
        const err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err)
    }
    // Dekodujemy token i wyciągamy z niego login i hasło
    const auth = new Buffer.from(authheader.split(' ')[1],
        'base64').toString().split(':');
    const user = auth[0];
    const pass = auth[1];

    // Sprawdzamy czy login i hasło są poprawne
    if (user === '' && pass === '') {

        // Jesli tak to przechodzimy do nastepnej funkcji
        next();
    } else {
        // Jesli nie to wysylamy odpowiedz z kodem 401
        const err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }

}


app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

// Server setup
app.listen((3000), () => {
    console.log("Server is Running");
})