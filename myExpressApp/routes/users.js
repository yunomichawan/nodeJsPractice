var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* 次のようにアクセスする「http://localhost:3000/users/test」 */
router.get('/test', function (req, res, next) {
  res.send('respond with a test');
});

module.exports = router;
