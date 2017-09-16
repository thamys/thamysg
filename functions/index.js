const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/timestamp', (request, response) => {
    response.send('Olá');
});

exports.app = functions.https.onRequest(app);
