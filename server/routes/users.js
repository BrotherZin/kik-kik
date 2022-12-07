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
router.post("/login", async function (req, res) {
  console.log(req.body)
  var user = await User.findOne({
    where: {
      id: req.body.id,
      password: req.body.password
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
router.post("/ResultPW", async function (req, res) {
  console.log(req.body)
  var user = await User.findOne({
    where: {
      id: req.body.id,
      name: req.body.name
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

router.post("/ResultID", async function (req, res) {
  console.log(req.body)
  var user = await User.findOne({
    where: {
      name: req.body.name,
      email: req.body.email
    }
  })
  console.log(user)


  if (user == null) {
    res.json({
      result: "fail",
      message: "이름 또는 이메일의 정보를 찾을 수 없습니다."
    })
    return
  } else {
    res.json({
      id: user.id,
      result: "ok"
    })
    return
  }
  //req.session.user = user

})

router.post("/FindPassWord", async function (req, res) {
  console.log(req.body)
  var user = await User.findOne({
    where: {
      id: req.body.id,
      name: req.body.name,
    }
  })
  if (user == null) {
    res.json({
      result: "fail",
      message: "아이디 또는 이름의 정보를 찾을 수 없습니다."
    })
    return
  }
  else {
    res.json({
      pw: user.password,
      result: "ok"
    })
    return
  }
  //req.session.user = user
})

router.post("/MyInfoView", async function (req, res) {
  console.log(req.body)
  var user = await User.findOne({
    where: {
      password: req.body.password,
    }
  })
  if (user == null) {
    res.json({
      result: "fail",
      message: "비밀번호가 잘못되었습니다."
    })
    return
  }
  else {
    res.json({
      name: user.name,
      id: user.id,
      pw: user.password,
      email: user.email,
      result: "ok"
    })
    return
  }
})

router.post('/MyInfoEdit', async (req, res) => {
  var id = req.body.id
  var board = await Board.findOne({
    where: {
      id: id
    }
  })
  //로그인된 사용자와 삭제하려는 게시물의 작성자가 같은지 확인
  if (board.userId == req.session.user.id) {
    await Users.update({
      name: req.body.name,
      id: req.body.id,
      password: req.body.password,
      email: req.body.email
    }, {
      where: {
        id: id
      }
    })
    res.json({
      result: "ok"
    })
  } else {
    res.json({
      result: "fail",
      msg: "수정할 권한이 없습니다."
    })

  }
})


module.exports = router;