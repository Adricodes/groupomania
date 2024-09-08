const fs = require('fs')

const db = require('../models')
const { Post } = db.sequelize.models

exports.getAllPosts = (req, res, next) => {
  // const limit = 4
  // const page = parseInt(req.query.page) || 1

  const options = {
    // include: [
    //     {
    //         model: db.User
    //     }
    // ],
    // limit,
    // offset: limit * (page - 1),
    order: [['createdAt', 'DESC']]
  }

  // if (req.query.userId) {
  //     options.where = {
  //         userId: parseInt(req.query.userId)
  //     }
  // }

  Post.findAll(options)
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }))
}

exports.createPost = (req, res, next) => {
  if (req.file) {
    const url = req.protocol + '://' + req.get('host');
    // req.body.user = JSON.parse(req.body.user);
    const post = {
      userId: req.body.post.userId,
      title: req.body.post.title,
      content: req.body.post.content,
      usersRead: [],
      mediaUrl: url + '/images/' + req.file.filename,
    };
  } else {

    // FIXME change to post with no mediaUrl
    post = {

    };
  }
  // TODO change code below to use sequelize and not mongoose
  post.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};