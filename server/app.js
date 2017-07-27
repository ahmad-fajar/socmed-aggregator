'use strict'

const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv').config();

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type : 'application/*+json'}));
app.use(bodyParser.json({ type : 'application/x-www-form-urlencoded'}));

app.set('view engine', 'ejs');

const index = require('./routes/index');
const twat   = require('./routes/twat');

app.use('/', index);
app.use('/twat', twat);


app.listen(3000, () => console.log('Listening...'))
