// TODO Create post schema

const sequelize = require('sequelize');

const userSchema = sequelize.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    usersLiked: { type: [String], required: true },
    usersDisliked: { type: [String], required: true },
});

module.exports = sequelize.model('User', userchema);