const sequelize = require('../config/connection');
const seedPosts = require('./postData');
const seedUsers = require('./userData');
const seedComments = require('./commentData');
const bcrypt = require('bcrypt');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  await seedComments();

  console.log('Database seeded successfully!');
  process.exit(0);
};

seedAll();
