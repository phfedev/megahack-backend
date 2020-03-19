const express = require('express');
const morgan = require('morgan');
const totalvoice = require('totalvoice-node');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());

app.use(require("./routes"));

app.listen(process.env.PORT || 3000);
