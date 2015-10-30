var express = require('express');
var router = express.Router();

var services = {
    nav: require('../backend/nav.json')
};

router.get('/backend/:service', function(req, res, next) {
    res.json(services[req.params.service]);
});

/* GET markup */
router.get('*', function(req, res, next) {
  res.render('index', {
      title: 'Tka4'
  });
});

module.exports = router;
