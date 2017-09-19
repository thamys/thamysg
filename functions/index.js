const functions = require('firebase-functions');
const firebase = require('firebase-admin');

const express = require('express');

var expressLess = require('express-less');
var pug = require('pug');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

function getFacts(){
    const ref = firebaseApp.database().ref('facts');
    return ref.once('value').then(snap => snap.val());
}

const app = express();

app.set('views', './src/views')
app.set('view engine', 'pug')

app.use('/assets/css', expressLess(__dirname + '/src/assets/less', { compress: true }));
app.use('/assets/img', express.static(__dirname + '/src/assets/img'));
app.use('/assets/fonts', express.static(__dirname + '/src/assets/fonts'));


app.get('/', (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    getFacts().then(facts => {
        response.render('index', {
            baseUrl: 'http://localhost:5003/thamys-guedes/us-central1/app/',
            title: 'Pug - Hands ON',
            message:{
                header: 'Olá Mundo!',
                text: 'Esse é um template BEM SIMPLES, só para servir de base para o nosso laboratório de Pug. Se você está lendo essa mensagem é porque todas as dependencias estão rodando. Parabéns!'
            },
            facts: facts
        })
    })
    
});

exports.app = functions.https.onRequest(app);
