const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/dashboard', require('./dashboard'));

router.get('/', (req, res) => {
  res.render('/dashboard');
});

module.exports = router;
