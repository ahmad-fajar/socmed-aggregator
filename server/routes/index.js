// routes
'use strict'

const router = require('express').Router();

router.get('/api/', (req, res) => res.send('Index Page'));

module.exports = router;