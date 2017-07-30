'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/*+json'}));
app.use(bodyParser.json({ type : 'application/x-www-form-urlencoded'}));

app.set('view engine', 'ejs');

const index = require('./routes/index');
const fb    = require('./routes/fb');
const twatt = require('./routes/twatt');

app.use('/', index);
app.use('/fb', fb);
app.use('/twatt', twatt);


app.listen(3000, () => console.log('Listening...'))
