'use strict'

const router = require('express').Router();
const fbCtrl = require('../controller/fbCtrl');


// router.get('/', (req, res) => res.send('index fb'));
router.get('/', fbCtrl.setAccessToken, fbCtrl.default);
router.post('/', fbCtrl.setAccessToken, fbCtrl.timeline);

module.exports = router;
