const router = require('express').Router();
const { User } = require('../models');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// router.use('/home', require('./home'));

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
