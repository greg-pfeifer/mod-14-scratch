const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class Blogpost extends Model { }

Blogpost.init({
    title: {
        type: DataTypes.STRING(45),
    },
    content: {
        type: DataTypes.STRING(1000),
    },
}, {
    sequelize: db,
    timestamps: false,
    freezeTableName: true,
    modelName: 'blogpost'
});

module.exports = Blogpost;



   