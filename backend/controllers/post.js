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

  Post.findAll(options)
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }))
}

exports.createPost = async (req, res, next) => {
  let post
  // console.log(req.body)
  let parsedPost
  
  if (req.file) {
    parsedPost = JSON.parse(req.body.post);
    console.log(parsedPost)
    const url = req.protocol + '://' + req.get('host');
    // req.body.user = JSON.parse(req.body.user);
    post = Post.build({
      userId: parsedPost.userId,
      title: parsedPost.title,
      content: parsedPost.content,
      usersRead: [],
      mediaUrl: url + '/media/' + req.file.filename,
    });
  } else {
    parsedPost = req.body
    post = Post.build({
      userId: parsedPost.userId,
      title: parsedPost.title,
      content: parsedPost.content,
      usersRead: [],
    });
  }
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
}

exports.getOnePost = (req, res, next) => {
  Post.findOne({
    where: { id: req.params.id }
  }).then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.postRead = (req, res, next) => {
  User.findOne({ where: { id: req.params.id } }).then(
    () => {
      res.status(200).json({
        message: 'Post has been read!'
      });
    }
  ).catch(
    (error) => {
      console.log(exports.postRead)
      res.status(400).json({
        error: error.message
      });
    }
  );
};