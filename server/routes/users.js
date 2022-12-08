const { request } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/join", async function (req, res) {
  var body = req.body
  console.log(body)
  var alreadyUser = await User.findOne({
    where: {
      id: body.id
    }
  })
  console.log(alreadyUser)

  var result = await User.create(body)
  res.json({
    result: "ok"
  })
})
router.post("/login", async function (req, res) {
  console.log(req.body)
  var user = await User.findOne({
    where: {
      id: req.body.id,
      password: req.body.password
    }
  })
  req.session.user = user
  res.json({
    result: "ok"
  })
})

module.exports = router;