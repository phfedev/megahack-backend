const routes = require('express').Router();
const multer = require('multer')
const cors = require('cors')
const multerConfig = require('./config/multer')
const totalvoice = require('totalvoice-node');

routes.get('/', (req, res) => {
    return res.json({ hello: 'World' })
});
routes.post('/posts', multer().single('numero'), (req, res) => {
    return res.json({ hello: 'World' })
});

routes.get('/sms', (req, res) =>{
    return res.json({ hello: 'World' })
});
routes.post('/sms', (req, res) =>{
    var pessoa = req.body;
    const client = new totalvoice("f1e7d9db50fa289d2080518116eaad6a");

    client.sms.enviar(pessoa.numero, "Olá passageiro, recebemos o seu número, assim que soubermos de alguma mudança iremos te informar")
    .then(function(data) {
        return res.send(data);
    })
    .catch(function(error) {
        return res.send(error);
    });
    //return res.send(data);
    //return res.json(req.body)
});
// routes.post('/validanumero', (req, res) => {
//     var pessoa = req.body
//     const client = new totalvoice("f1e7d9db50fa289d2080518116eaad6a");
//     client.validanumero.criar(pessoa.numero).then(function(data) {  
//         return res.send(data);
//     }).catch(function(error) {
//         return res.send(error);
//     });
// });

routes.post('/novoCadastro', (req, res) =>{
    var pessoa = req.body
    console.log(req.body);
    const client = new totalvoice("f1e7d9db50fa289d2080518116eaad6a");
    client.sms.enviar(pessoa.numero, "Olá passageiro, recebemos o seu número, assim que soubermos de alguma mudança iremos te informar")
    .then(function(data) {
        return res.send(data);
    })
    .catch(function(error) {
        return res.send(error);
    });
    setTimeout(() => client.tts.enviar(pessoa.numero, `Olá, o voo ${pessoa.voo} vai atrasar uma hora, qualquer novidade voltamos a te avisar`),30000)
    return res.send("Recebemos seus dados");
});

routes.post('/vooatrasado', (req, res) => {
    var pessoa = req.body
    const client = new totalvoice("f1e7d9db50fa289d2080518116eaad6a");
    client.tts.enviar(pessoa.numero, "Olá, o seu voo vai atrasar uma hora")
    .then(function(data) {
        return res.send(data);
    })
    .catch(function(error) {
        return res.send(error);
    });
});

module.exports = routes;