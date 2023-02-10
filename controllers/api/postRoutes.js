const router = require('express').Router();
const { User, Post } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const postData = await Post.create(req.body);

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const postData = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!postData[0]) {
      res.status(404).json({ message: 'No post found with this id' });
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData[0]) {
      res.status(404).json({ message: 'No post found with this id' });
    }

    res.status(200).json(postData);
  } catch {
    (err) => res.status(400).json(err);
  }
});

module.exports = router;
