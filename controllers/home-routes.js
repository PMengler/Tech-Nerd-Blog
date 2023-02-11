const router = require('express').Router();
const apiRoutes = require('./api');
const { User, Post, Comment } = require('../models');

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({});

    const posts = dbPostData.map((user) => user.get({ plain: true }));
    res.render('all-posts', {
      posts,
      loggedIn: req.session.loggedIn,
    });

    console.log(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
