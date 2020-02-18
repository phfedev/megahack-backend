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
    const client = new totalvoice("YourApi");

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
module.exports = routes;