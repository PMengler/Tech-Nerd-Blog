const router = require('express').Router();
const { User, Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [User],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const commentData = await Comment.create(req.body);

    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const commentData = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!commentData[0]) {
      res.status(404).json({ message: 'No comment found with this id' });
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentData[0]) {
      res.status(404).json({ message: 'No comment found with this id' });
    }

    res.status(200).json(commentData);
  } catch {
    (err) => res.status(400).json(err);
  }
});

module.exports = router;
