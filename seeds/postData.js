const { Post } = require('../models');

const postdata = [
  {
    title: 'First Post',
    content: 'This is the first post',
    user_name: 'Sal',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
