const express = require('express');
const morgan = require('morgan');
const totalvoice = require('totalvoice-node');
const cors = require('cors');

const app = express();
// const client = new totalvoice("your token");

// client.sms.enviar("62981955972", "Ola tudo bem?")
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(error) {
//         console.log('Erro: ', error)
//     });
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());

app.use(require("./routes"));

app.listen(process.env.PORT || 3000);
