'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
        }
    }
    Post.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        mediaUrl: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },
        usersRead: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
            unique: false,
        },
    }, {
        sequelize,
        modelName: 'Post',
    });
    return Post;
};

// const sequelize = require('sequelize');

// const postSchema = sequelize.Schema({
//     userId: { type: String, required: true },
//     title: { type: String, required: true },
//     content: { type: String, required: true },
//     mediaUrl: { type: String, required: false },
//     usersRead: { type: [String], required: true },
// });

// module.exports = sequelize.model('Post', postSchema);