const functions = require('firebase-functions');
const express = require('express');

const app = express();

var expressLess = require('express-less');
var pug = require('pug');


app.set('views', './views')
app.set('view engine', 'pug')

app.use('/assets/css', expressLess(__dirname + '/src/assets/less', { compress: true }));
app.use('/assets/img', express.static(__dirname + '/src/assets/img'));
app.use('/assets/fonts', express.static(__dirname + '/src/assets/fonts'));


app.get('/', (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600')
    response.render('index', { title: 'Pug - Hands ON', message:{header: 'Olá Mundo!', text: 'Esse é um template BEM SIMPLES, só para servir de base para o nosso laboratório de Pug. Se você está lendo essa mensagem é porque todas as dependencias estão rodando. Parabéns!'}})
});

exports.app = functions.https.onRequest(app);
