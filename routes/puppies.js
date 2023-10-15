var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('puppies', { puppyNames: ['Rover', 'Prince', 'Fido']})
})

module.exports = router;
