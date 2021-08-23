const express = require('express');
var UserService = require('../services/user.service.js');

const router = express.Router();

const userService = new UserService();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  console.log(await userService.test());
  res.send('respond with a resource');
});

router.post('/signup', (_req, res, _next) => {
  userService.signUp('', '', '');
  res.send('sign up');
});

module.exports = router;
