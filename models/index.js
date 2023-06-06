const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});
Post.hasMany(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});
Comments.belongsTo(User, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comments };
