const { Post } = require('../models');

const postdata = [
  {
    title: 'First Post',
    content: 'This is the first post',
    user_id: 1,
  },
  {
    title: 'Second Post',
    content: 'This is the second post',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
