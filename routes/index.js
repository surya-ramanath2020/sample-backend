var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({title:"Sample",description:"csxfs"})
});

module.exports = router;
