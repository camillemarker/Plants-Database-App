var express = require('express')
var router = express.Router()
const passport = require('passport')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home Page' })
})

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/plants',
    failureRedirect: '/plants'
  })
)

router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/plants')
  })
})

module.exports = router
