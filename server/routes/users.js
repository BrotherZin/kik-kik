const { request } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
//회원가입
router.post("/join", async function (req, res) {
  var body = req.body
  console.log(body)
  var alreadyUser = await User.findOne({
    where: {
      id: body.id
    }
  })
  if (alreadyUser != null) {
    res.json({
      result: "fail",
      message: "이미 존재하는 아이디입니다."
    })
    return
  }
  console.log(alreadyUser)

  var result = await User.create(body)
  res.json({
    result: "ok"
  })
})
//로그인
router.post("/login", async function (req, res) {
  console.log(req.body)
  var user = await User.findOne({
    where: {
      id: req.body.id,
      pw: req.body.pw
    }
  })
  if (user == null) {
    res.json({
      result: "fail",
      message: "아이디 또는 비밀번호가 잘못되었습니다."
    })
    return
  }
  req.session.user = user
  res.json({
    result: "ok"
  })
})
//아이디 찾기
router.post("/find_id", async function (req, res) {
  console.log(req.body)
  var user = await User.findOne({
    where: {
      name: req.body.name,
      email: req.body.email
    }
  })
  if (user == null) {
    res.json({
      result: "fail",
      message: "이름 또는 이메일의 정보를 찾을 수 없습니다."
    })
    return
  }
  else {
    res.json({
      id: user.id,
      result: "ok"
    })
    return
  }
})
//비번 찾기
router.post("/find_pw", async function (req, res) {
  console.log(req.body)
  var user = await User.findOne({
    where: {
      id: req.body.id,
      email: req.body.email
    }
  })
  if (user == null) {
    res.json({
      result: "fail",
      message: "이름또는 아이디의 정보를 찾을 수 없습니다."
    })
    return
  }
  else {
    res.json({
      pw: user.pw,
      result: "ok"
    })
    return
  }
})


module.exports = router;