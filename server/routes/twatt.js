// routes
'use strict'

const router = require('express').Router();
const OAuth = require('oauth');

const twatCtrl = require('../controller/twatCtrl');

const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  // consumer key
  'ze9Udi9U8EUG3rXZKNBEEAYmz',
  //secret
  'tr8DlCZ6lKdlsqQrjWCVa62K1La2zfZG0gd1TDH5Ot9IEPuOV4',
  '1.0A',
  null,
  'HMAC-SHA1'
);


router.get('/', twatCtrl.defaultTimeline)
router.get('/search?:q', twatCtrl.search)
router.get('/trending', twatCtrl.trending)
router.get('/user?:q', twatCtrl.otherUserTimeline)

router.post('/new-twatt', twatCtrl.post)


module.exports = router;