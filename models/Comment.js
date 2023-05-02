const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class Comment extends Model { }

Comment.init({
    new_comment: {
        type: DataTypes.STRING(1000),
    }
}, {
    sequelize: db,
    timestamps: true,
    freezeTableName: true,
    modelName: 'comment'
});

module.exports = Comment;



   