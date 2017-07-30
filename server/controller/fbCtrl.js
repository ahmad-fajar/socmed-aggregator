'use strict'

const FB = require('fb');
const fb = new FB.Facebook({version: 'v2.8'});

exports.setAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.accesstoken)
  next()
};

exports.default = (req, res) => {
  FB.api('/me/feed', response => {
    res.send(response)
  });
};

exports.timeline = (req, res) => {
  FB.api('/me/feed', 'post', {
    message: req.body.status
  }, response => {
    console.log(`ini response dari /fbtimeline yang post: ${response}`);
    res.send(response)
  });
};
