const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  
  const post = await Post.bulkCreate({ postData,
    user_id: users[Math.floor(Math.random() * users.length)].id,
  });
  const comments = await Post.bulkCreate({ commentData,
    user_id: users[Math.floor(Math.random() * users.length)].id,
    post_id,
  });
  

  process.exit(0);
};

seedDatabase();
