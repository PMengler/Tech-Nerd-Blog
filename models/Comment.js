const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // user_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: {
    //     model: 'user',
    //     key: 'name',
    //   },
    // },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
