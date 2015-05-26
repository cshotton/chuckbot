var express = require('express');
var router = express.Router();

/* GET bot response page. */
router.get('/', function(req, res, next) {
  res.send('respond with a bot response');
});

/* POST bot response page. */
router.post('/', function(req, res, next) {
  res.send('respond with a bot response');
});

module.exports = router;
