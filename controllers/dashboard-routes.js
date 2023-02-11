const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.render('');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
